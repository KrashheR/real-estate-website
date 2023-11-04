import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ApartmentType } from '../../types/ICard';

export const selectCards = (state: RootState) => state.cardReducer.cards;

export const selectPromos = (state: RootState) => state.promoReducer.promos;

export const selectMinPrice = (state: RootState) => state.cardReducer.filters.minPrice;
export const selectMaxPrice = (state: RootState) => state.cardReducer.filters.maxPrice;

export const selectSortedCards = createSelector([selectCards], (cards) => {
  return [...cards].sort((a, b) => {
    if (a.type === 'premium' && b.type !== 'premium') {
      return -1;
    }
    if (a.type !== 'premium' && b.type === 'premium') {
      return 1;
    }
    return 0;
  });
});

export const selectCardByTitle = (state: RootState, title: string) => {
  return state.cardReducer.cards.find((card) => card.title === title);
};

export const selectFilteredCards = createSelector(
  [selectSortedCards, (state: RootState) => state.cardReducer.filters],
  (sortedCards, filters) => {
    const { deliveryDate, objectType, minPrice, maxPrice } = filters;
    let isMatch: boolean = true;

    const filteredCards = sortedCards.filter((card) => {
      isMatch = true;

      if (deliveryDate !== null) {
        isMatch =
          card.deliveryDate === deliveryDate ? true : false;
      }

      const apartments = JSON.parse(card.apartments);
      const parking = JSON.parse(card.parking);
      let keyToCheck: string | null = null;

      if (objectType !== 'all' && isMatch) {
        switch (objectType) {
          case 'one-room':
            isMatch = Object.values(apartments['1']).some(
              (apartmentType) => (apartmentType as ApartmentType).num > 0,
            );
            keyToCheck = '1';
            break;
          case 'two-room':
            isMatch = Object.values(apartments['2']).some(
              (apartmentType) => (apartmentType as ApartmentType).num > 0,
            );
            keyToCheck = '2';
            break;
          case 'three-room':
            isMatch = Object.values(apartments['3']).some(
              (apartmentType) => (apartmentType as ApartmentType).num > 0,
            );
            keyToCheck = '3';
            break;
          case 'parking-space':
            keyToCheck = 'parking';
            isMatch = parking.num > 0;
            break;
        }
      }

      if (isMatch) {
        const isPriceInRange = (
          price: number,
          minPrice: number | null,
          maxPrice: number | null,
        ): boolean =>
          price >= (minPrice ?? price) && price <= (maxPrice ?? price);

        const isApartmentAvailable = (apartmentType: ApartmentType): boolean =>
          apartmentType.num > 0 &&
          isPriceInRange(apartmentType.price, minPrice, maxPrice);

        if (keyToCheck && apartments[keyToCheck]) {
          isMatch = Object.values(apartments[keyToCheck]).some(
            (apartmentType) =>
              isApartmentAvailable(apartmentType as ApartmentType),
          );
        } else if (keyToCheck === 'parking') {
          isMatch = isPriceInRange(parking.price, minPrice, maxPrice);
        } else {
          isMatch = Object.values(apartments).some((apartment) =>
            Object.values(apartment as ApartmentType).some((apartmentType) =>
              isApartmentAvailable(apartmentType as ApartmentType),
            ),
          );
        }
      }

      return isMatch;
    });

    return filteredCards;
  },
);

import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ResidentialDetails, ParkingDetails } from '../../types/ICard';

export const selectCards = (state: RootState) => state.cardReducer.cards;

export const selectPromos = (state: RootState) => state.promoReducer.promos;

export const selectMinPrice = (state: RootState) =>
  state.cardReducer.filters.minPrice;
export const selectMaxPrice = (state: RootState) =>
  state.cardReducer.filters.maxPrice;

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

    const filteredCards = sortedCards.filter((card) => {
      let isMatch: boolean =
        deliveryDate === null || card.deliveryDate === deliveryDate;

      const cardApartments = JSON.parse(card.apartments);
      const residentialItems = cardApartments.apartments;
      const parkingItems = cardApartments.parking;

      const isPriceInRange = (
        price: number,
        minPrice: number | null,
        maxPrice: number | null,
      ): boolean =>
        price >= (minPrice ?? price) && price <= (maxPrice ?? price);

      const isApartmentAvailable = (
        apartment: ResidentialDetails | ParkingDetails,
      ): boolean =>
        apartment.num > 0 &&
        isPriceInRange(apartment.price, minPrice, maxPrice);

      if (isMatch) {
        switch (objectType) {
          case 'one-room':
            isMatch = residentialItems.some(
              (residential: ResidentialDetails) =>
                residential.roomNum === '1' &&
                isApartmentAvailable(residential),
            );
            break;
          case 'two-room':
            isMatch = residentialItems.some(
              (residential: ResidentialDetails) =>
                residential.roomNum === '2' &&
                isApartmentAvailable(residential),
            );
            break;
          case 'three-room':
            isMatch = residentialItems.some(
              (residential: ResidentialDetails) =>
                residential.roomNum === '3' &&
                isApartmentAvailable(residential),
            );
            break;
          case 'parking-space':
            isMatch =
              parkingItems &&
              parkingItems.some((parking: ParkingDetails) =>
                isApartmentAvailable(parking),
              );
            break;
          default:
            isMatch =
              residentialItems.some(isApartmentAvailable) ||
              (parkingItems && parkingItems.some(isApartmentAvailable));
            break;
        }
      }

      return isMatch;
    });

    return filteredCards;
  },
);

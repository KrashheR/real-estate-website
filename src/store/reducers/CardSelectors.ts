import { createSelector } from 'reselect';
import { RootState } from '../store';
import { IApartmentData } from '../../types/ICard';

export const selectCards = (state: RootState) => state.cardReducer.cards;

export const selectCardById = (state: RootState, id: string) => {
  console.log();
  return state.cardReducer.cards.find((card) => card.id === id);
};

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

export const selectFilteredCards = createSelector(
  [selectSortedCards, (state: RootState) => state.cardReducer.filters],
  (sortedCards, filters) => {
    const { deliveryDate, objectType, minPrice, maxPrice } = filters;

    const filteredCards = sortedCards.filter((card) => {
      let isMatch: boolean =
        deliveryDate === null || card.deliveryDate === deliveryDate;

      const cardApartments: IApartmentData[] = JSON.parse(card.apartments);

      const isPriceInRange = (
        price: number,
        minPrice: number | null,
        maxPrice: number | null,
      ): boolean =>
        price >= (minPrice ?? price) && price <= (maxPrice ?? price);

      const isApartmentAvailable = (apartment: IApartmentData): boolean =>
        apartment.num > 0 &&
        isPriceInRange(apartment.price, minPrice, maxPrice);

      if (isMatch) {
        switch (objectType) {
          case 'one-room':
            isMatch = cardApartments.some(
              (apartment) =>
                apartment.roomNum === '1' && isApartmentAvailable(apartment),
            );
            break;
          case 'two-room':
            isMatch = cardApartments.some(
              (apartment) =>
                apartment.roomNum === '2' && isApartmentAvailable(apartment),
            );
            break;
          case 'three-room':
            isMatch = cardApartments.some(
              (apartment) =>
                apartment.roomNum === '3' && isApartmentAvailable(apartment),
            );
            break;
          case 'parking-space':
            isMatch = cardApartments.some(
              (apartment) =>
                apartment.roomNum === 'parking' &&
                isApartmentAvailable(apartment),
            );
            break;
          default:
            isMatch = cardApartments.some(isApartmentAvailable);
            break;
        }
      }

      return isMatch;
    });

    return filteredCards;
  },
);

import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCards = (state: RootState) => state.cardReducer.cards;

interface ApartmentType {
  num: number;
  price: number;
}

export const selectSortedCards = createSelector(
  [selectCards],
  (cards) => {
    return [...cards].sort((a, b) => {
      if (a.type === "premium" && b.type !== "premium") {
        return -1;
      }
      if (a.type !== "premium" && b.type === "premium") {
        return 1;
      }
      return 0;
    });
  }
);

export const selectFilteredByDateCards = createSelector(
  [selectSortedCards, (state: RootState) => state.cardReducer.filters],
  (sortedCards, filters) => {
    const { deliveryDate } = filters;

    if (deliveryDate !== null) {
      return sortedCards.filter(card => parseInt(card.deliveryDate, 10) === deliveryDate);
    }

    return sortedCards;
  }
);

export const selectFilteredByTypeCards = createSelector(
  [selectFilteredByDateCards, (state: RootState) => state.cardReducer.filters],
  (filteredCards, filters) => {
    const { objectType } = filters;

    if (objectType === 'Все объекты') {
      return filteredCards;
    }

    return filteredCards.filter(card => {
      try {
        const apartments = JSON.parse(card.apartments);
        const parking = JSON.parse(card.parking);

        switch (objectType) {
          case 'Однокомнатная квартира':
            return Object.values(apartments['1']).some((apartmentType) => (apartmentType as ApartmentType).num > 0);
          case 'Двухкомнатная квартира':
            return Object.values(apartments['2']).some((apartmentType) => (apartmentType as ApartmentType).num > 0);
          case 'Трёхкомнатная квартира':
            return Object.values(apartments['3']).some((apartmentType) => (apartmentType as ApartmentType).num > 0);
          case 'Машиноместо':
            return parking.num > 0;
          default:
            return true;
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return false;
      }
    });
  }
);
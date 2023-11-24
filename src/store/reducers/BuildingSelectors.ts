import { createSelector } from 'reselect';
import { RootState } from '../store';
import { IApartmentData } from '../../types/IBuilding';

export const selectBuildings = (state: RootState) => state.buildingReducer.buildings;

export const selectBuildingById = (state: RootState, id: string) => {
  return state.buildingReducer.buildings.find((building) => building.id === id);
};

export const selectMinPrice = (state: RootState) =>
  state.buildingReducer.filters.minPrice;
export const selectMaxPrice = (state: RootState) =>
  state.buildingReducer.filters.maxPrice;

export const selectSortedBuildings = createSelector([selectBuildings], (cards) => {
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

export const selectFilteredBuildings = createSelector(
  [selectSortedBuildings, (state: RootState) => state.buildingReducer.filters],
  (sortedBuildings, filters) => {
    const { completionDate, objectType, minPrice, maxPrice } = filters;

    const filteredCards = sortedBuildings.filter((building) => {
      let isMatch: boolean =
      completionDate === null || building.completionDate === completionDate;
      const buildingApartments: IApartmentData[] = JSON.parse(building.apartments);

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
            isMatch = buildingApartments.some(
              (apartment) =>
                apartment.roomNum === '1' && isApartmentAvailable(apartment),
            );
            break;
          case 'two-room':
            isMatch = buildingApartments.some(
              (apartment) =>
                apartment.roomNum === '2' && isApartmentAvailable(apartment),
            );
            break;
          case 'three-room':
            isMatch = buildingApartments.some(
              (apartment) =>
                apartment.roomNum === '3' && isApartmentAvailable(apartment),
            );
            break;
          case 'parking-space':
            isMatch = buildingApartments.some(
              (apartment) =>
                apartment.roomNum === 'parking' &&
                isApartmentAvailable(apartment),
            );
            break;
          default:
            isMatch = buildingApartments.some(isApartmentAvailable);
            break;
        }
      }
      return isMatch;
    });

    return filteredCards;
  },
);

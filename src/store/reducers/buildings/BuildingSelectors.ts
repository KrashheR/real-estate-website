import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { IApartmentData } from '../../../types/IBuilding';

export const selectBuildings = (state: RootState) =>
  state.buildingReducer.buildings;

export const selectBuildingById = (state: RootState, id: string) => {
  return state.buildingReducer.buildings.find((building) => building.id === id);
};

export const selectBuildingsMinMaxCalculatingState = (state: RootState) => {
  return state.buildingReducer.isMinMaxSet;
};

export const selectInitialMinPrice = (state: RootState) =>
  state.buildingReducer.initialMinPrice;

export const selectInitialMaxPrice = (state: RootState) =>
  state.buildingReducer.initialMaxPrice;

export const selectCurrentFilterType = (state: RootState): string =>
  state.buildingReducer.filters.objectType;

export const selectCurrentMinPrice = (state: RootState): number | null =>
  state.buildingReducer.filters.minPrice;

export const selectCurrentMaxPrice = (state: RootState): number | null =>
  state.buildingReducer.filters.maxPrice;

export const selectCurrentCompletionDates = (state: RootState): string[] =>
  state.buildingReducer.filters.completionDates;

export const selectSortedBuildings = createSelector(
  [selectBuildings],
  (cards) => {
    return [...cards].sort((a, b) => {
      if (a.type === 'premium' && b.type !== 'premium') {
        return -1;
      }
      if (a.type !== 'premium' && b.type === 'premium') {
        return 1;
      }
      return 0;
    });
  },
);

export const selectFilteredBuildings = createSelector(
  [selectSortedBuildings, (state: RootState) => state.buildingReducer.filters],
  (sortedBuildings, filters) => {
    const { completionDates, objectType, minPrice, maxPrice } = filters;

    const filteredCards = sortedBuildings.filter((building) => {
      let isMatch: boolean = true;
      const buildingApartments: IApartmentData[] = JSON.parse(
        building.apartments,
      );

      if (completionDates.length > 0) {
        isMatch = completionDates.includes(building.completionDate);
      }

      const isPriceInRange = (
        price: number,
        minPrice: number | null,
        maxPrice: number | null,
      ): boolean => {
        const min = minPrice ?? 0;
        const max = maxPrice ?? Infinity;
        return price >= min && price <= max;
      };

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

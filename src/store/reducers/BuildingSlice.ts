import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBuilding } from '../../types/IBuilding';

interface BuildingState {
  buildings: IBuilding[];
  isLoading: boolean;
  error: string;
  filters: FilterValues;
}

interface FilterValues {
  minPrice: number | null;
  maxPrice: number | null;
  objectType: string;
  completionDate: string | null;
}

const initialState: BuildingState = {
  buildings: [],
  isLoading: false,
  error: '',
  filters: {
    minPrice: null,
    maxPrice: null,
    objectType: 'Все объекты',
    completionDate: null,
  },
};

export const buildingSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    buildingsFetching(state) {
      state.isLoading = true;
    },
    buildingsFetchingSuccess(state, action: PayloadAction<IBuilding[]>) {
      state.isLoading = false;
      state.error = '';
      state.buildings = action.payload;
    },
    buildingsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterValues>) => {
      state.filters = action.payload;
    },
    setMinMaxPrice: (state, action: PayloadAction<{min: number, max: number}>) => {
      state.filters.minPrice = action.payload.min;
      state.filters.maxPrice = action.payload.max;
    },
  },
});

export const { setFilters } = buildingSlice.actions;
export default buildingSlice.reducer;

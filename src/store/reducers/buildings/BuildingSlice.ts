import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBuilding } from '../../../types/IBuilding';

interface BuildingState {
  buildings: IBuilding[];
  isLoading: boolean;
  isMinMaxSet: boolean;
  error: string;
  filters: FilterValues;
  initialMinPrice: number | null;
  initialMaxPrice: number | null;
}

interface FilterValues {
  minPrice: number | null;
  maxPrice: number | null;
  objectType: string;
  completionDates: string[];
}

const initialState: BuildingState = {
  buildings: [],
  isLoading: false,
  isMinMaxSet: false,
  error: '',
  filters: {
    minPrice: null,
    maxPrice: null,
    objectType: 'Все объекты',
    completionDates: [],
  },
  initialMinPrice: null,
  initialMaxPrice: null,
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
    setMinMaxPrice: (
      state,
      action: PayloadAction<{ min: number; max: number }>,
    ) => {
      state.filters.minPrice = action.payload.min;
      state.filters.maxPrice = action.payload.max;
      state.initialMinPrice = action.payload.min;
      state.initialMaxPrice = action.payload.max;
      state.isMinMaxSet = true;
    },
    setMinPrice: (state, action: PayloadAction<number | null>) => {
      state.filters.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number | null>) => {
      state.filters.maxPrice = action.payload;
    },
    setObjectType: (state, action: PayloadAction<string>) => {
      state.filters.objectType = action.payload;
    },
    setCompletionDates: (state, action: PayloadAction<string[]>) => {
      state.filters.completionDates = action.payload;
    },
  },
});

export const {
  setFilters,
  setMinPrice,
  setMaxPrice,
  setObjectType,
  setCompletionDates,
} = buildingSlice.actions;
export default buildingSlice.reducer;

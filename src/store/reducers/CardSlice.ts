import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../models/ICard";

interface CardState {
  cards: ICard[];
  isLoading: boolean;
  error: string;
  minPrice: number;
  maxPrice: number;
  filters: FilterValues;
};

interface FilterValues {
  minPrice: number | null;
  maxPrice: number | null;
  objectType: string;
  deliveryDate: number | null;
}

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: "",
  minPrice: 0,
  maxPrice: 100,
  filters: {
    minPrice: null,
    maxPrice: null,
    objectType: 'Все объекты',
    deliveryDate: null,
  }
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardsFetching(state) {
      state.isLoading = true;
    },
    cardsFetchingSuccess(state, action: PayloadAction<ICard[]>) {
      state.isLoading = false;
      state.error = "";
      state.cards = action.payload;
    },
    cardsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterValues>) => {
      state.filters = action.payload;
    },
  }
})

export const { setFilters } = cardSlice.actions;
export default cardSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPromo } from "../../../types/IPromo";

interface PromoState {
  promos: IPromo[];
  isLoading: boolean;
  error: string;
}

const initialState:PromoState = {
  promos: [],
  isLoading: false,
  error: '',
}

export const promoSlice = createSlice({
  name: "promo",
  initialState,
  reducers: {
    promosFetching(state) {
      state.isLoading = true;
    },
    promosFetchingSuccess(state, action: PayloadAction<IPromo[]>) {
      state.isLoading = false;
      state.error = '';
      state.promos = action.payload;
    },
    promosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default promoSlice.reducer;
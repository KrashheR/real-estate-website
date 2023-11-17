import { Action, ThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { cardSlice } from "./CardSlice";
import { promoSlice } from "./PromoSlice";
import { getMinAndMaxApartmentPrice } from "../../utils/cardPriceUtils";
import { getCardsUrl, getSlideshowUrl, getNewsUrl  } from "../routes";
import axios from "axios";

export const fetchCards = () => {
  return (dispatch: AppDispatch) => {
    dispatch(cardSlice.actions.cardsFetching());
    fetch(getCardsUrl)
      .then(response => response.json())
      .then(data => {
        dispatch(cardSlice.actions.cardsFetchingSuccess(data));
        dispatch(updateMinMaxPrices());
      })
      .catch(error => dispatch(cardSlice.actions.cardsFetchingError(error.toString())));
  }
}

export const updateMinMaxPrices = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState) => {
    const { cards } = getState().cardReducer;
    const [minPrice, maxPrice] = getMinAndMaxApartmentPrice(cards);
    dispatch(cardSlice.actions.setMinMaxPrice({ min: minPrice, max: maxPrice }));
  }
}

export const fetchPromos = () => {
  return (dispatch: AppDispatch) => {
    dispatch(promoSlice.actions.promosFetching());
    fetch(getSlideshowUrl)
      .then(response => response.json())
      .then(data => dispatch(promoSlice.actions.promosFetchingSuccess(data)))
      .catch(error => dispatch(promoSlice.actions.promosFetchingError(error.toString())));
  }
}

// export const fetchNews = () => {
//   return (dispatch: AppDispatch) => {
//     dispatch(newsSlice.actions.newsFetching());
//     fetch(getSlideshowUrl)
//       .then(response => response.json())
//       .then(data => dispatch(newsSlice.actions.newsFetchingSuccess(data)))
//       .catch(error => dispatch(newsSlice.actions.newsFetchingError(error.toString())));
//   }
// }

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (count: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${getNewsUrl}?limit=${count}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

import { Action, ThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { buildingSlice } from "./buildings/BuildingSlice";
import { promoSlice } from "./promo/PromoSlice";
import { getMinAndMaxApartmentPrice } from "../../utils/buildingPriceUtils";
import { getCardsUrl, getSlideshowUrl, getNewsUrl  } from "../routes";
import axios from "axios";

export const fetchBuildings = () => {
  return (dispatch: AppDispatch) => {
    dispatch(buildingSlice.actions.buildingsFetching());
    fetch(getCardsUrl)
      .then(response => response.json())
      .then(data => {
        dispatch(buildingSlice.actions.buildingsFetchingSuccess(data));
        dispatch(updateMinMaxPrices());
      })
      .catch(error => dispatch(buildingSlice.actions.buildingsFetchingError(error.toString())));
  }
}

export const updateMinMaxPrices = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState) => {
    const { buildings } = getState().buildingReducer;
    const [minPrice, maxPrice] = getMinAndMaxApartmentPrice(buildings);
    dispatch(buildingSlice.actions.setMinMaxPrice({ min: minPrice, max: maxPrice }));
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

interface FetchNewsArgs {
  page: number;
  pageSize: number;
}

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({page, pageSize}: FetchNewsArgs, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * pageSize;
      const response = await axios.get(`${getNewsUrl}?limit=${pageSize}&offset=${offset}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


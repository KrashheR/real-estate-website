import { Action, ThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { buildingSlice } from './buildings/BuildingSlice';
import { promoSlice } from './promo/PromoSlice';
import { getMinAndMaxApartmentPrice } from '../../utils/buildingPriceUtils';
import { getCardsUrl, getPromoUrl, getNewsUrl } from '../routes';
import axios from 'axios';

export const fetchBuildings = () => {
  return (dispatch: AppDispatch) => {
    dispatch(buildingSlice.actions.buildingsFetching());
    fetch(getCardsUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch(buildingSlice.actions.buildingsFetchingSuccess(data));
        dispatch(updateMinMaxPrices());
      })
      .catch((error) =>
        dispatch(
          buildingSlice.actions.buildingsFetchingError(error.toString()),
        ),
      );
  };
};

export const updateMinMaxPrices = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch, getState) => {
    const { buildings } = getState().buildingReducer;
    const [minPrice, maxPrice] = getMinAndMaxApartmentPrice(buildings);
    dispatch(
      buildingSlice.actions.setMinMaxPrice({ min: minPrice, max: maxPrice }),
    );
  };
};

export const fetchPromos = () => {
  return (dispatch: AppDispatch) => {
    dispatch(promoSlice.actions.promosFetching());
    fetch(getPromoUrl)
      .then((response) => response.json())
      .then((data) => dispatch(promoSlice.actions.promosFetchingSuccess(data)))
      .catch((error) =>
        dispatch(promoSlice.actions.promosFetchingError(error.toString())),
      );
  };
};

interface FetchNewsArgs {
  page: number;
  pageSize: number;
}

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page, pageSize }: FetchNewsArgs, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const existingNews = state.newsReducer.newsByPage[page];

    if (existingNews) {
      return { page, news: existingNews, total: state.newsReducer.total };
    }

    try {
      const offset = (page - 1) * pageSize;
      const response = await axios.get(
        `${getNewsUrl}?limit=${pageSize}&offset=${offset}`,
      );
      return { page, news: response.data.data, total: response.data.total };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

import { Action, ThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { buildingSlice } from './buildings/buildingSlice';
import { promoSlice } from './promo/promoSlice';
import { getMinAndMaxApartmentPrice } from '../../utils/buildingPriceUtils';
import axios from 'axios';
import buildingData from '../../mocks/buildingData.json';
import promoData from '../../mocks/promoData.json';
import newsData from '../../mocks/newsData.json';

export const fetchBuildings = () => {
  console.log('1. Начало fetchBuildings');
  return (dispatch: AppDispatch) => {
    console.log('2. Внутри функции dispatch');
    dispatch(buildingSlice.actions.buildingsFetching());

    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('3. Получен ответ от мок данных');
        dispatch(
          buildingSlice.actions.buildingsFetchingSuccess(
            buildingData.buildings,
          ),
        );
        console.log('4. Данные успешно загружены', buildingData.buildings);
        resolve();
      }, 50);
    })
      .then(() => dispatch(updateMinMaxPrices()))
      .catch((error) => {
        console.log('Ошибка:', error);
        dispatch(
          buildingSlice.actions.buildingsFetchingError(error.toString()),
        );
      });
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
    new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch(promoSlice.actions.promosFetchingSuccess(promoData.promos));
        resolve();
      }, 50);
    }).catch((error) => {
      dispatch(promoSlice.actions.promosFetchingError(error.toString()));
    });
  };
};

interface FetchNewsArgs {
  page: number;
  pageSize: number;
}

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page, pageSize }: FetchNewsArgs, { rejectWithValue }) => {
    try {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const paginatedNews = newsData.news.slice(start, end);

      return {
        page,
        news: paginatedNews,
        total: newsData.total,
      };
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке новостей');
    }
  },
);

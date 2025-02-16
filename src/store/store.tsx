import { combineReducers } from 'redux';
import buildingReducer from './reducers/buildings/buildingSlice';
import promoReducer from './reducers/promo/promoSlice';
import newsReducer from './reducers/news/newsSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  buildingReducer,
  promoReducer,
  newsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

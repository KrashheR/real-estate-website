import { combineReducers } from 'redux';
import buildingReducer from "./reducers/buildings/BuildingSlice";
import promoReducer from "./reducers/promo/PromoSlice";
import newsReducer from "./reducers/news/NewsSlice";
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  buildingReducer,
  promoReducer,
  newsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


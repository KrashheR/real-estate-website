import { combineReducers } from 'redux';
import buildingReducer from "./reducers/BuildingSlice";
import promoReducer from "./reducers/PromoSlice";
import newsReducer from "./reducers/NewsSlice";
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


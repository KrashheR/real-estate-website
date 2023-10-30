import { combineReducers } from 'redux';
import cardReducer from "./reducers/CardSlice";
import promoReducer from "./reducers/PromoSlice";
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cardReducer,
  promoReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


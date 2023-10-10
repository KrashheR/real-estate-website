import { combineReducers } from 'redux';
import cardReducer from "./reducers/CardSlice";
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cardReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


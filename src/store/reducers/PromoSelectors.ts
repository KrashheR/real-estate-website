import { RootState } from '../store';

export const selectPromos = (state: RootState) => state.promoReducer.promos;

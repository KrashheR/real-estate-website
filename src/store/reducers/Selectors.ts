import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCards = (state: RootState) => state.cardReducer.cards;

export const selectSortedCards = createSelector(
  [selectCards],
  (cards) => {
    return [...cards].sort((a, b) => {
      if (a.type === "premium" && b.type !== "premium") {
        return -1;
      }
      if (a.type !== "premium" && b.type === "premium") {
        return 1;
      }
      return 0;
    });
  }
);
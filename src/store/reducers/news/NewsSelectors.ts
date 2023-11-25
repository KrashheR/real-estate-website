import { createSelector } from 'reselect';
import { RootState } from '../../store';

const selectNewsState = (state: RootState) => state.newsReducer;

export const selectNews = createSelector(
  [selectNewsState],
  (newsState) => newsState.news,
);

export const selectCurrentPage = createSelector(
  [selectNewsState],
  (newsState) => newsState.currentPage,
);

export const selectPageSize = createSelector(
  [selectNewsState],
  (newsState) => newsState.pageSize,
);

export const selectTotalNews = createSelector(
  [selectNewsState],
  (newsState) => newsState.total,
);

export const selectNewsById = (state: RootState, id: number) => {
  return state.newsReducer.news.find((item) => item.id == id);
};

export const selectNewsLoading = createSelector(
  [selectNewsState],
  (newsState) => newsState.isLoading,
);

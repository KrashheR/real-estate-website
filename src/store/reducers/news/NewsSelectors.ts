import { createSelector } from 'reselect';
import { RootState } from '../../store';

const selectNewsState = (state: RootState) => state.newsReducer;

export const selectCurrentPage = createSelector(
  [selectNewsState],
  (newsState) => newsState.currentPage,
);

export const selectNews = createSelector(
  [selectNewsState, selectCurrentPage],
  (newsState, currentPage) => newsState.newsByPage[currentPage] || [],
);

export const selectPageSize = createSelector(
  [selectNewsState],
  (newsState) => newsState.pageSize,
);

export const selectTotalNews = createSelector(
  [selectNewsState],
  (newsState) => newsState.total,
);

export const selectNewsForPage = (page: number) => createSelector(
  [selectNewsState],
  (newsState) => newsState.newsByPage[page] || [],
);

export const selectNewsLoading = createSelector(
  [selectNewsState],
  (newsState) => newsState.isLoading,
);

export const selectNewsById = (state: RootState, id: string) => {
  const pages = state.newsReducer.newsByPage;

  for (const page in pages) {
    const newsItem = pages[page].find((item) => item.id === id);
    if (newsItem) return newsItem;
  }
  return null;
};

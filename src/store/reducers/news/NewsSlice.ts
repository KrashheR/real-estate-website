import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INews } from '../../../types/INews';
import { fetchNews } from '../actionCreators';

interface NewsState {
  newsByPage: { [page: number]: INews[] };
  isLoading: boolean;
  error: string;
  currentPage: number;
  pageSize: number;
  total: number;
}

const initialState: NewsState = {
  newsByPage: {},
  isLoading: false,
  error: '',
  currentPage: 1,
  pageSize: 6,
  total: 0,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    updateCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        const { page, news, total } = action.payload;
        state.newsByPage[page] = news;
        state.total = total;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
export const { updateCurrentPage } = newsSlice.actions;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INews } from '../../../types/INews';
import { fetchNews } from '../ActionCreators';

interface NewsState {
  news: INews[];
  isLoading: boolean;
  error: string;
  currentPage: number; // текущая страница
  pageSize: number; // размер страницы
  total: number; // общее количество новостей
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: '',
  currentPage: 1,
  pageSize: 6, // можно настроить в зависимости от ваших требований
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
        state.news = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.data;
        state.total = action.payload.total;
    })

      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

  },
});

export default newsSlice.reducer;
export const { updateCurrentPage } = newsSlice.actions;
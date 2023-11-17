import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INews } from "../../types/INews";
import { fetchNews } from "./ActionCreators";

interface NewsState {
  news: INews[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: '',
  count: 3,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching(state) {
      state.isLoading = true;
    },
    newsFetchingSuccess(state, action: PayloadAction<INews[]>) {
      state.isLoading = false;
      state.error = '';
      state.news = action.payload;
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<INews[]>) => {
        state.isLoading = false;
        state.count += 3;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  }
})

export default newsSlice.reducer;
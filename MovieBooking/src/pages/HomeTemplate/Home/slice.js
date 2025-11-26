import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  dataCarousel: null,
  error: null,
};

export const fetchMovieCarousel = createAsyncThunk(
  "carousel/fetchMovieCarousel",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk"
        },
      });

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const movieCarouselSlice = createSlice({
  name: "movieCarouselSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCarousel.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMovieCarousel.fulfilled, (state, action) => {
      state.loading = false;
      state.dataCarousel = action.payload;
    });

    builder.addCase(fetchMovieCarousel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default movieCarouselSlice.reducer;

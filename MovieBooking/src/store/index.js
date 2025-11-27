import { configureStore } from "@reduxjs/toolkit";
import movieCarouselReducer from "./../pages/HomeTemplate/Home/slice";
import movieListReducer from "./../pages/HomeTemplate/MovieList/slice";
import movieDetailReducer from "./../pages/HomeTemplate/MovieDetail/slice";

const Store = configureStore({
  reducer: {
     movieCarouselReducer,
     movieListReducer,
     movieDetailReducer,
  },
});

export default Store;

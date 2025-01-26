import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRated: null,
    upcoming: null,
    watchMovie: null,
    watchList: {
      list: [],
    },
    toggleWatchListView: false,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addWatchMovie: (state, action) => {
      state.watchMovie = action.payload;
    },
    addWatchList: (state, action) => {
      state.watchList.items.push(action.payload);
    },
    removeWatchList: (state, action) => {
      const index = state.watchList.items.findIndex(
        (movie) => movie.id === action.payload.id
      );
      state.watchList.items.splice(index, 1);
    },
    toggleWatchList: (state) => {
      state.toggleWatchListView = !state.toggleWatchListView;
    },
  },
});

export const {
  addNowPlaying,
  addTrailer,
  addPopular,
  addTopRated,
  addUpcoming,
  addWatchMovie,
  addWatchList,
  removeWatchList,
} = moviesSlice.actions;
export default moviesSlice.reducer;

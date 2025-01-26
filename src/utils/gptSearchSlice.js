import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    logoButton: (state) => {
      state.showGptSearch = false;
    },
  },
});

export const { toggleGptSearchView, logoButton } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;

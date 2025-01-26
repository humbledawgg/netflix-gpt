import { createSlice } from "@reduxjs/toolkit";

const gptResultsSlice = createSlice({
  name: "Results",
  initialState: {
    movieNames : null,
    movieResults : null
  },
  reducers: {
    addResults: (state, action) => {
      state.movieResults =  action.payload;
    },
    addMovieName:(state, action) =>{
        state.movieNames = action.payload
    }
  },
});

export const { addResults, addMovieName } = gptResultsSlice.actions;

export default gptResultsSlice.reducer;

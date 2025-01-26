import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSearchSlice";
import configReducer from "./configSlice";
import gptResultsReducer from "./gptResultsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    gptResults: gptResultsReducer,
  },
});

export default appStore;

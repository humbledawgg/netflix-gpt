import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlaying();
  }, []);
};

export default useNowPlaying;

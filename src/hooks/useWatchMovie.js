import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addWatchMovie } from "../utils/moviesSlice";

const useWatchMovie = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&vq=hd1080p`,
      API_options
    );
    const json = await data.json();
    console.log(json.results);
    const officialTrailer = json.results.filter(
      (list) => list.name === "Official Trailer" || list.type === "Trailer"
    );
    console.log(officialTrailer[0]);
    dispatch(addWatchMovie(officialTrailer[0]));
  };
};

export default useWatchMovie;

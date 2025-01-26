import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcoming);
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    !upcoming && getUpcoming();
  }, []);
};

export default useUpcoming;

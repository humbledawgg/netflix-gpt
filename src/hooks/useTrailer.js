import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_options } from "../utils/constants";

const useGetTrailer = (id) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);

  useEffect(() => {
    !trailer && getTrailer();
  }, []);

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&vq=hd1080p`,
      API_options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
};

export default useGetTrailer;

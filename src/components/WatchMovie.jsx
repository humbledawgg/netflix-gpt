import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import useWatchMovie from "../hooks/useWatchMovie";

const WatchMovie = () => {
  const { id } = useParams();
  useWatchMovie(id);

  const movie = useSelector((store) => store.movies?.watchMovie?.key);
  return (
    <div className="bg-black w-[100%] h-screen">
      <div className="flex justify-end">
        <button className="text-white px-4 pt-3 font-bold text-3xl mt-2 mx-2 ">
          <Link to="/">
            <>&lt;</>
          </Link>
        </button>
      </div>
      <iframe
        className="w-[100%] aspect-video mt-5"
        src={`https://www.youtube.com/embed/${movie}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchMovie;

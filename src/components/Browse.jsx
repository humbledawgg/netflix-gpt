import { useDispatch, useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import GptMovieSuggestions from "./GptMovieSuggestions";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGpt ? (
        <>
          <GptSearch />
          <GptMovieSuggestions />
        </>
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;

import { useDispatch, useSelector } from "react-redux";
import { API_options, Background } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { addMovieName, addResults } from "../utils/gptResultsSlice";

const GptSearch = () => {
  const chosenLang = useSelector((store) => store.config.lang);

  const gptSearch = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=%" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query(But if the movie exists return the same result and add related suggestions) : " +
      gptSearch.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    const gptSearchMovies =
      gptSearchResults.choices[0].message.content.split(",");

    const promiseArray = gptSearchMovies.map((movie) => searchMovieTMDB(movie));

    const data = await Promise.all(promiseArray);

    dispatch(addMovieName(gptSearchMovies));
    dispatch(addResults(data));
  };

  return (
    <>
      <div className="">
        <img
          className="fixed h-[100%] object-cover md:w-[100%]"
          alt="background-image"
          src={Background}
        />
      </div>
      <div className="relative z-30 pt-[60%]  md:pt-[8%]   flex justify-center align-middle ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black w-[100%] md:w-6/12 h-[60px] grid grid-cols-12 rounded-md"
        >
          <input
            ref={gptSearch}
            type="text"
            className="col-span-10 p-2 m-5 rounded-md relative -top-[10px]"
            placeholder={lang?.[chosenLang]?.gptPlaceholderText}
          />
          <button
            onClick={handleGptSearch}
            className="bg-red-700 text-white col-span-2 m-[19px] -ml-[10px] rounded-lg relative -top-[10px]"
          >
            {lang?.[chosenLang]?.search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearch;

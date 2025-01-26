import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-[100%] md:pt-[20%] lg:pt-[20%] xl:pt-[0%]">
      <div className=" md:-mt-72 relative z-30 p-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default SecondaryComponent;

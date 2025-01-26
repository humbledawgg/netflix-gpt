import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  const [currentMovies, setCurrentMovies] = useState();
  return (
    <div className="p-0 pb-10 md:p-6">
      <h1 className="text-2xl md:text-3xl text-white -ml-5">{title}</h1>
      <div className="flex pt-3 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track scrollbar-custom">
        <div className="flex flex-shrink-0 gap-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              name={movie.title}
              movie_id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

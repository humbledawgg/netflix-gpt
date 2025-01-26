import React from "react";
import { IMG_URL_CDN } from "../utils/constants";
import { Link } from "react-router";

const MovieCard = ({ poster, movie_id, name }) => {
  if (!poster) return null;
  const movieName = name.length > 22 ? `${name.slice(0, 22)}...` : name;
  return (
    <div className="relative group w-36 h-52 md:w-48 md:h-72 hover:scale-110   transition-transform hover:z-10">
      <Link to={`/movie/${movie_id}`}>
        <img
          className="w-full h-full object-contain  "
          src={`${IMG_URL_CDN}${poster}`}
          alt={name}
        />
        {/* Movie Name */}
        <h1 className="text-md text-center font-semibold absolute bottom-20 inset-x-0 flex items-center justify-center bg-black bg-opacity-50  text-white opacity-0 group-hover:opacity-100 transition-opacity">
          {movieName}
        </h1>
      </Link>
    </div>
  );
};

export default MovieCard;

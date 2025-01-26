import React from "react";
import { Link } from "react-router";

const VideoTitle = (props) => {
  return (
    <div className="pt-[20%] md:pt-[25%]  lg:pt-[20%]  px-4 md:px-24 w-[100%] absolute text-white bg-gradient-to-r from-black  aspect-video">
      <div>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl w-1/3 md:w-full ">
          {props.title}
        </h1>
        <p className="hidden lg:inline-block py-6 text-lg font-semibold w-1/3">
          {props.overview}
        </p>
      </div>
      <div className="mt-2 md:mt-5">
        <Link to={`/movie/${props.movie_id}`}>
          <button className="mr-5 w-20  md:w-28 h-8 md:h-12 bg-white text-black rounded-md  md:text-lg font-bold hover:bg-opacity-50">
            <div className="flex justify-center gap-2">
              <img
                width="25"
                height="10"
                src="https://img.icons8.com/ios-glyphs/30/play--v1.png"
                alt="play--v1"
              />
              <span>Play</span>
            </div>
          </button>
        </Link>
        <button className=" hidden relative -top-[6.5px] md:inline-block w-28 h-12 bg-gray-500 bg-opacity-50 rounded-md text-lg font-bold  hover:bg-opacity-20">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

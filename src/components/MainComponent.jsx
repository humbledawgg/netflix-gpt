import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { OPENAI_KEY } from "../utils/constants";

const MainComponent = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!nowPlaying) return;
  console.log("openaikey " + OPENAI_KEY);
  console.log("env " + import.meta.env.VITE_OPENAI_KEY);

  const mainMovie = nowPlaying[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[50%] bg-black md:pt-[0%]">
      <VideoTitle title={original_title} overview={overview} movie_id = {id}/>
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainComponent;

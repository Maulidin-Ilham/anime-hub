import React from "react";
import HeroImage from "./HeroImage";
import AnimeGenre from "./AnimeGenre";
import AnimeBroadcast from "./AnimeBroadcast";
import AnimeSynopsis from "./AnimeSynopsis";

const Hero = ({ anime }) => {
  return (
    <>
      <div className="w-full border-2 border-gray-200  h-[300px] md:h-[400px] lg:h-[470px] relative">
        <div className="w-full h-full ">
          <HeroImage anime={anime} />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-black ">
          <div className="flex flex-col justify-center items-start mt-8 px-4 ">
            <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold ">
              {anime.title}
            </h1>
            <AnimeGenre anime={anime} />
            <AnimeSynopsis anime={anime} />
            <AnimeBroadcast anime={anime} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

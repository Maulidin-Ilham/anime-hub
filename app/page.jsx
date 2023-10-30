import React from "react";
import { fetchRandom } from "./utils/fetchRandom";
import Image from "next/image";

const page = async () => {
  const data = await fetchRandom();
  const animeRandom = data.data;
  const randomId = Math.floor(Math.random() * 25);
  const anime = animeRandom[randomId];

  return (
    <div className="px-4 flex flex-col  ">
      <div className="w-full border-2 border-gray-200  h-[270px] relative">
        <div className="w-full h-full ">
          {anime.trailer.images.maximum_image_url !== null ? (
            <img
              src={anime.trailer.images.maximum_image_url}
              alt={anime.title}
              className="w-full h-full object-cover  "
            />
          ) : (
            <img
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              className="w-full h-full object-cover  "
            />
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-black ">
          <div className="flex flex-col justify-center items-start mt-8 px-4 ">
            <h1 className="text-white text-2xl font-bold ">{anime.title}</h1>

            <div className="flex flex-row space-x-2 mt-3  ">
              {anime.genres.slice(0, 3).map((genre, index) => (
                <h1
                  key={index}
                  className="text-white text-base bg-blue-400 px-2 rounded"
                >
                  {genre.name}
                </h1>
              ))}
            </div>
            <h1 className="text-white mt-2">
              {anime.synopsis !== null && anime.synopsis.length > 70
                ? anime.synopsis.substring(0, 70) + "..." // Display the first 100 characters and add an ellipsis
                : anime.synopsis}
            </h1>

            {anime.season !== null && anime.year !== null ? (
              <h1 className="text-white font-semibold mt-2 text-lg capitalize">
                {anime.season} {anime.year}
              </h1>
            ) : (
              <h1 className="text-white text-lg font-semibold mt-2">Soon</h1>
            )}
            {/* {anime.season} {anime.year} */}
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
};

export default page;

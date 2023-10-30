import React from "react";
import { fetchRandom } from "./utils/fetchRandom";
import Image from "next/image";

const page = async () => {
  const data = await fetchRandom();
  const anime = data.data;

  return (
    <div className="px-4 flex flex-col  ">
      <div className="w-full border-2 border-gray-200 rounded-md h-[270px] relative">
        <div className="w-full h-full">
          <img
            src={anime.trailer.images.maximum_image_url}
            alt={anime.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-30% to-60% from-black ">
          <div className="flex flex-col justify-center items-start mt-16 px-4 space-y-2">
            <h1 className="text-white text-xl font-bold ">{anime.title}</h1>
            <h1 className="text-white   ">{anime.type}</h1>
            <h1 className="text-white   ">{anime.episodes}</h1>
            <h1 className="text-white   bg-gray-300 px-2">{anime.status}</h1>
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
};

export default page;

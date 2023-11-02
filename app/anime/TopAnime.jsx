import React from "react";
import { fetchTopAnime } from "../utils/fetchTopAnime";
import Link from "next/link";

const TopAnime = async () => {
  const data = await fetchTopAnime();
  const topAnime = data.data;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7">
        {topAnime.map((anime) => (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="relative w-full h-full cursor-pointer hover:scale-95 transition-all duration-300"
          >
            <img
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity bg-gradient-to-r  from-black">
              <span className="text-white text-center font-medium md:font-semibold lg:font-bold text-lg md:text-xl lg:text-2xl px-2 rounded">
                {anime.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopAnime;

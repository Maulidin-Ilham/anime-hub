import React from "react";
import { fetchTopAnime } from "../utils/fetchTopAnime";

const TopAnime = async () => {
  const data = await fetchTopAnime();
  const topAnime = data.data;

  return (
    <>
      <div className="flex flex-row space-x-3">
        {topAnime.map((anime) => (
          <div key={anime.mal_id} className="w-full h-full border shadow-md ">
            <img
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopAnime;

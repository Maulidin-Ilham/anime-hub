import React from "react";
import { fetchRandom } from "./utils/fetchRandom";
import Image from "next/image";
import Hero from "./components/Hero";
import TopAnime from "./anime/TopAnime";

const page = async () => {
  const data = await fetchRandom();
  const animeRandom = data.data;
  const randomId = Math.floor(Math.random() * 25);
  const anime = animeRandom[randomId];

  return (
    <div className="p-4 flex flex-col  ">
      <Hero anime={anime} />
      <div className="mt-6 mb-3 text-xl md:text-2xl lg:text-3xl font-bold">
        Top Anime
      </div>
      <TopAnime />
    </div>
  );
};

export default page;

import React from "react";
import { fetchRandom } from "./utils/fetchRandom";
import Image from "next/image";
import Hero from "./components/Hero";
import { Carousel } from "@trendyol-js/react-carousel";

const page = async () => {
  const data = await fetchRandom();
  const animeRandom = data.data;
  const randomId = Math.floor(Math.random() * 25);
  const anime = animeRandom[randomId];
  // console.log(animeRandom);
  return (
    <div className="px-4 flex flex-col  ">
      <Hero anime={anime} />

      <div>hello</div>
    </div>
  );
};

export default page;

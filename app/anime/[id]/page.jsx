"use client";
import Trailer from "@/app/components/Trailer";
import { fetchAnimeDetail } from "@/app/utils/fetchAnimeDetail";
import Image from "next/image";

import React from "react";

const page = async ({ params }) => {
  const mal_id = params.id;
  const animeDetails = await fetchAnimeDetail(mal_id);
  const details = animeDetails.data;

  return (
    <div className="p-4 w-full text-white">
      <div className="flex flex-col">
        <h1 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
          {details.title}
        </h1>
        <div className="flex flex-row space-x-7">
          <Image
            src={details.images.webp.large_image_url}
            width={200}
            height={200}
            alt={details.title}
          />
          <div className="flex md:flex-row md:space-x-7 flex-col">
            <div className="text-lg md:text-xl lg:text-2xl">
              <h1 className="font-semibold ">Score</h1>
              <h1 className="font-bold text-lg">{details.score}</h1>
              <h1>{details.scored_by.toLocaleString("en-US")} users</h1>
            </div>
            <h1 className="mt-3 md:mt-0 md:text-lg">
              Ranked #{" "}
              <span className="font-bold text-lg md:text-xl lg:text-2xl">
                {details.rank}
              </span>
            </h1>
            <h1 className="md:text-lg">
              Popularity #
              <span className="font-bold text-lg md:text-xl lg:text-2xl">
                {details.popularity}
              </span>
            </h1>
            <h1 className="md:text-lg">
              Members{" "}
              <span className="font-bold text-lg md:text-xl lg:text-2xl">
                {details.members}
              </span>
            </h1>
            <p className="mt-4 md:hidden ">
              {details.synopsis.length > 70
                ? details.synopsis.substring(0, 70) + "..." // Display the first 100 characters and add an ellipsis
                : details.synopsis}
            </p>
          </div>
        </div>
        {/* Medium-sized Synopsis */}
        <div className="hidden md:block mt-6">
          <h1 className="text-lg font-semibold mb-2">Synopsis</h1>
          <p className="text-md ">{details.synopsis}</p>
        </div>
        {/* Video */}
        <div className="mt-6 w-full">
          <h1 className="text-lg font-semibold mb-2">Trailer</h1>
          <Trailer details={details} />
        </div>
      </div>
    </div>
  );
};

export default page;

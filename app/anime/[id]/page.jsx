"use client";
import { fetchAnimeDetail } from "@/app/utils/fetchAnimeDetail";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import YouTube from "react-youtube";

const page = async ({ params }) => {
  const mal_id = params.id;
  const animeDetails = await fetchAnimeDetail(mal_id);
  const details = animeDetails.data;

  return (
    <div className="p-4 w-full ">
      <h1 className="text-xl font-bold">Details Page</h1>

      <div className="flex flex-col mt-4">
        <h1 className="text-lg font-semibold mb-2">{details.title}</h1>
        <div className="flex flex-row space-x-7 ">
          <Image
            src={details.images.webp.large_image_url}
            width={200}
            height={200}
            alt={details.title}
          />
          <div className="flex md:flex-row md:space-x-3  flex-col">
            <div className="flex flex-col  ">
              <h1>Score</h1>
              <h1 className="font-bold text-lg">{details.score}</h1>
              <h1 className="">{details.scored_by.toLocaleString("en-US")} </h1>
              <h1>users</h1>
            </div>
            <h1 className="mt-3 md:mt-0">
              Ranked # <span className="font-bold">{details.rank}</span>
            </h1>
            <h1>
              Popularity #
              <span className="font-bold">{details.popularity}</span>
            </h1>
            <h1>
              Members <span className="font-bold">{details.members}</span>
            </h1>
          </div>
        </div>
        {/* video */}
        <div className="mt-6 w-full ">
          <h1 className="text-lg font-semibold mb-2">Trailer</h1>
          {details.trailer.youtube_id !== null ? (
            <YouTube
              videoId={details.trailer.youtube_id}
              opts={{
                width: "100%",
                height: "500",
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          ) : (
            <h1 className="mt-2 font-semibold">Video is not available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

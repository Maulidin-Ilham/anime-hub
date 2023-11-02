import { fetchAnimeDetail } from "@/app/utils/fetchAnimeDetail";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const mal_id = params.id;
  const animeDetails = await fetchAnimeDetail(mal_id);
  const details = animeDetails.data;
  console.log(mal_id);
  console.log(details);
  return (
    <div className="p-4   ">
      <h1 className="text-xl font-bold">Details Page</h1>

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold mb-2">{details.title}</h1>
        <div className="flex flex-row space-x-7 ">
          <Image
            src={details.images.webp.large_image_url}
            width={200}
            height={200}
            alt={details.title}
          />
          <div className="flex flex-row space-x-3">
            <div className="flex flex-col  mr-8">
              <h1>Score</h1>
              <h1 className="font-bold text-lg">{details.score}</h1>
              <h1>{details.scored_by.toLocaleString("en-US")} </h1>
              <h1>users</h1>
            </div>
            <h1>
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
      </div>
    </div>
  );
};

export default page;

import { fetchAnimeDetail } from "@/app/utils/fetchAnimeDetail";
import React from "react";

const page = ({ params }) => {
  const mal_id = params.id;
  const animeDetails = fetchAnimeDetail(mal_id);
  const detail = animeDetails.data;
  console.log(mal_id);
  console.log(detail);
  return (
    <div className="p-4 flex flex-col  ">
      <h1>Hello this is detail page {mal_id}</h1>
    </div>
  );
};

export default page;

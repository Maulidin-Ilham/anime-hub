import React from "react";

export const fetchTopAnime = async () => {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

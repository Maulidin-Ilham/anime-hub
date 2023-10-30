import React from "react";

export const fetchRandom = async () => {
  const randomId = Math.random() * 100;
  // const res = await fetch(`https://api.jikan.moe/v4/random/anime`);
  const res = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

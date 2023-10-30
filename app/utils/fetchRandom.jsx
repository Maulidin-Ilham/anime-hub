import React from "react";

export const fetchRandom = async () => {
  const randomId = Math.random() * 1000;
  const res = await fetch(`https://api.jikan.moe/v4/anime/1`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

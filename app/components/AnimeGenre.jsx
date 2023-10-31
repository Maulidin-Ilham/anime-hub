import React from "react";

const AnimeGenre = ({ anime }) => {
  return (
    <div className="flex flex-row space-x-2 mt-3  ">
      {anime.genres.slice(0, 3).map((genre, index) => (
        <h1
          key={index}
          className="text-white text-base bg-blue-400 px-2 rounded"
        >
          {genre.name}
        </h1>
      ))}
    </div>
  );
};

export default AnimeGenre;

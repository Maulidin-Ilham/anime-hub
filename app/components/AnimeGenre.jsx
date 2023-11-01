import React from "react";

const AnimeGenre = ({ anime }) => {
  // Define a mapping of genres to background colors
  const genreColors = {
    Action: "bg-red-400",
    Adventure: "bg-blue-400",
    Comedy: "bg-yellow-400",
    Drama: "bg-purple-400",
    Fantasy: "bg-green-400",
    Horror: "bg-black",
    Magic: "bg-pink-400",
    Mystery: "bg-indigo-400",
    Psychological: "bg-teal-400",
    Romance: "bg-orange-400",
    "Sci-Fi": "bg-gray-400",
    "Slice of Life": "bg-cyan-400",
    Supernatural: "bg-brown-400",
  };

  return (
    <div className="flex flex-row space-x-2 mt-3">
      {anime.genres.slice(0, 3).map((genre, index) => (
        <h1
          key={index}
          className={`text-white text-lg md:text-xl lg:text-2xl ${
            genreColors[genre.name] || "bg-gray-400" // Default to gray if genre not in mapping
          } px-2 rounded`}
        >
          {genre.name}
        </h1>
      ))}
    </div>
  );
};

export default AnimeGenre;

import React from "react";

const AnimeSynopsis = ({ anime }) => {
  return (
    <h1 className="text-white mt-2">
      {anime.synopsis !== null && anime.synopsis.length > 70
        ? anime.synopsis.substring(0, 70) + "..." // Display the first 100 characters and add an ellipsis
        : anime.synopsis}
    </h1>
  );
};

export default AnimeSynopsis;

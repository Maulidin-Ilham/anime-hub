import React from "react";

const AnimeBroadcast = ({ anime }) => {
  return (
    <>
      {anime.season !== null && anime.year !== null ? (
        <h1 className="text-white font-semibold mt-2 text-lg capitalize">
          {anime.season} {anime.year}
        </h1>
      ) : (
        <h1 className="text-white text-lg font-semibold mt-2">Soon</h1>
      )}
    </>
  );
};

export default AnimeBroadcast;

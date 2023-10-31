import React from "react";

const HeroImage = ({ anime }) => {
  return (
    <>
      {anime.trailer.images.maximum_image_url !== null ? (
        <img
          src={anime.trailer.images.maximum_image_url}
          alt={anime.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className="w-full h-full object-cover  "
        />
      )}
    </>
  );
};

export default HeroImage;

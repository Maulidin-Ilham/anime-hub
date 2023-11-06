import React from "react";
import YouTube from "react-youtube";

const Trailer = ({ details }) => {
  return (
    <>
      {details.trailer.youtube_id !== null ? (
        <YouTube
          videoId={details.trailer.youtube_id}
          opts={{
            width: "100%",
            height: "500",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      ) : (
        <h1 className="mt-2 text-xl font-semibold">Video is not available</h1>
      )}
    </>
  );
};

export default Trailer;

import React from "react";

const Video = () => {
  const poster = "/images/video-poster.jpg"; // Confirm this file exists
  const width = "100%";
  const height = "auto";

  return (
    <div className="w-full max-w-7xl mx-auto lg:my-25 px-2 my-10 ">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline

        style={{ width, height }}
      >
        <source src="/desktop-dark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

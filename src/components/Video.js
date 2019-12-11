import React from "react";

const Video = ({ dispVideo }) => {
  if (!dispVideo) return <h1>Loading</h1>;

  const videoURL = `https://www.youtube.com/embed/${dispVideo.id.videoId}`;
  return (
    <div
      style={{
        height: "550px",
        width: "70%",
        marging: "2px",
        padding: "2px",
        border: "2px solid black",
        background: "grey"
      }}
    >
      <iframe height="75%" width="100%" src={videoURL} />
      <h2 fontColor="white">
        {dispVideo.snippet.title} - {dispVideo.snippet.channelTitle}{" "}
      </h2>
      <h4 fontColor="white">{dispVideo.snippet.description}</h4>
    </div>
  );
};

export default Video;

import React from "react";

const SmallVideoTemplate = ({ video, fcurVid }) => {
  return (
    <div
      style={{
        background: "grey",
        width: "100%",
        height: "200px",
        border: "5px solid black",
        cursor: "pointer"
      }}
      onClick={e => {
        fcurVid(video);
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt="some image"
        style={{ height: "80%", width: "100%" }}
      />
      <p style={{ padding: "0", margin: "0",width: "100%" }}>{video.snippet.title}</p>
    </div>
  );
};

export default SmallVideoTemplate;

import React from "react";

const SmallVideoTemplate = ({ video }) => {
  return (
    <div style={{ width: "100%", height: "200px", border: "50x solid black" }}>
      <img src={video.snippet.thumbnails.medium.url} alt="some image" style={{height: "80%",width: "100%"}}/>
      <p style={{padding: "0",margin: "0"}}>{video.snippet.title}</p>
    </div>
  );
};

export default SmallVideoTemplate;

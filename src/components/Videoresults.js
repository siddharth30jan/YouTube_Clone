import React from "react";
import SmallVideoTemplate from "./SmallVideoTemplate";

const VideoResults = ({ videoList }) => {
  return (
    <div style={{ width: "30%", height: "100%", background: "grey" }}>
      {videoList.map(x => {
        return <SmallVideoTemplate video={x} />;
      })}
    </div>
  );
};

export default VideoResults;

import React, { useState } from "react";
import Nav from "./components/Nav";
import Video from "./components/Video";
import VideoResults from "./components/VideoResults";

function App() {
  const [videoList, fvideoList] = useState([]);
  return (
    <div>
      <Nav videoList={videoList} fvideoList={fvideoList} />
      <div style={{display: "flex"}}>
      <Video dispVideo={videoList[0]} />
      <VideoResults videoList={videoList} />
      </div>
    </div>
  );
}

export default App;

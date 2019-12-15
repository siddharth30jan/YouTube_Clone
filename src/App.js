import React, { useState } from "react";
import Nav from "./components/Nav";
import Video from "./components/Video";
import VideoResults from "./components/VideoResults";

function App() {
  const [videoList, fvideoList] = useState([]);
  const [curVid, fcurVid] = useState();
  return (
    <div style={{width: "98%",margin: "auto"}} >
      <Nav fvideoList={fvideoList} fcurVid={fcurVid} />
      <div style={{ display: "flex" }}>
        <Video dispVideo={curVid} />
        <VideoResults videoList={videoList} fcurVid={fcurVid} />
      </div>
    </div>
  );
}

export default App;

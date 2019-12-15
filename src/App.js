import React, { useState } from "react";
import { Nav, Video, VideoResults } from "./components";

function App() {
  const [videoList, fvideoList] = useState([]);
  const [curVid, fcurVid] = useState();
  return (
    <div style={{ width: "98%", margin: "auto" }}>
      <Nav fvideoList={fvideoList} fcurVid={fcurVid} />
      <div style={{ display: "flex" }}>
        <Video dispVideo={curVid} />
        <VideoResults videoList={videoList} fcurVid={fcurVid} />
      </div>
    </div>
  );
}

export default App;

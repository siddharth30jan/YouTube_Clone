import React, { useState } from "react";
import Nav from "./components/Nav";
import Video from "./components/Video";

function App() {
  const [videoList, fvideoList] = useState([]);
  return (
    <div>
      <Nav videoList={videoList} fvideoList={fvideoList} />
      <Video dispVideo={videoList[0]} />
    </div>
  );
}

export default App;

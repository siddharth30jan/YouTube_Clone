import React,{useState} from 'react';
import Nav from './components/Nav'

function App() {
  const [videoList,fvideoList]=useState([])
  return (
  <Nav videoList={videoList} fvideoList={fvideoList}/>
  );
}

export default App;

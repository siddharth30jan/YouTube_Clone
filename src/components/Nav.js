import React, { useState } from "react";
const style = {
  display: "flex",
  justifyContent: "space-around",
  background: "grey"
};
const Nav = ({ fvideoList, fcurVid }) => {
  const [result, fResult] = useState();
  const myFunction = async e => {
    //API calling
    try {
      let response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyB-9jZwJX4l3i68xcfXN9SFB5eQjxnVJgc&q=${result}`
      );
      let data = await response.json();
     
      fcurVid(data.items[0]);
      data.items.shift()
     //  console.log(data.items)
       fvideoList(data.items);
    } catch (err) {
      console.log(err);
    }

    console.log(result);
  };
  return (
    <div style={style}>
      <h1 style={{ marginTop: "0px", color: "white" }}>YouTube</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          style={{ width: "800px", height: "30px" }}
          onChange={e => {
            fResult(e.target.value);
          }}
        />
        <button
          style={{ height: "30px", cursor: "pointer" }}
          onClick={myFunction}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Nav;

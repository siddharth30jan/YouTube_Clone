import React,{useState} from "react";
const style = {
  display: "flex",
  justifyContent: "space-around",
  background: "grey"
};
const Nav = () => {
  const [result,fResult]=useState()
  const myFunction=(e)=>{

    //API calling
    console.log(result)
  }
  return (
    <div style={style}>
      <h1 style={{marginTop: "0px",color: "white"}}>YouTube</h1>
      <div >
        <input
          type="text"
          placeholder="Search"
          style={{ width: "800px", height: "30px" }}
          onChange={(e)=>{fResult(e.target.value)}}
        />
        <button style={{height: "30px",cursor: "pointer" }} onClick={myFunction} >Search</button>
      </div>
    </div>
  );
};

export default Nav;

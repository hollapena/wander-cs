import React from "react";

function Welcome() {
  return (
    <div id="welcome-screen">
      {/* <img
        id="suitcase"
        src="https://i.pinimg.com/originals/4c/b0/3e/4cb03e76f409d854eeda76a7b840f23a.gif"
        alt="swinging suitcase"
      ></img> this option requires align items start and display flex row in the css file*/}
      <div id="welcomeitems">
        <h1>Welcome</h1>
        <hr id="welcomeline"></hr>
        <br></br>
        <button>Log In</button>
        <br></br>
        <br></br>
        <button>Sign Up</button>
        <br></br>
        <br></br>
        <button>Practice List</button>
      </div>
    </div>
  );
}

export default Welcome;

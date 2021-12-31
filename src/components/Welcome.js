import React from "react";
import {Link} from 'react-router-dom';

function Welcome() {
  return (
    <div id="welcome-screen">
      <img
        id="suitcase"
        src="https://i.pinimg.com/originals/4c/b0/3e/4cb03e76f409d854eeda76a7b840f23a.gif"
        alt="swinging suitcase"
      ></img>
      {/* ^^ this option requires align items start and display flex row in the css file */}
      <div id="welcomeitems">
        <h1>Wander</h1>
        <hr id="welcomeline"></hr>
        <br></br>
        <Link to="login">
          <button className="button">Log In</button>
        </Link>
        <br></br>
        <br></br>
        <Link to="signup">
          <button className="buttontwo">Sign Up</button>
        </Link>
        {/* <br></br>
        <br></br>
        <button className="button">Practice List</button> */}
      </div>
    </div>
  );
}

export default Welcome;

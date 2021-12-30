import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserHome(props) {
  const navigate = useNavigate();
  function handleReturnClick() {
    navigate("/login");
  }
  if (props.authenticated === true) {
    return (
      <div id="home">
        <h1>Welcome Back, {props.userFirst}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Invalid Login information</h1>
        <button onClick={handleReturnClick}>Return to Login</button>
      </div>
    );
  }
}

export default UserHome;

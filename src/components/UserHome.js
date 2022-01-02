import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function UserHome(props) {
  const navigate = useNavigate();
  function handleReturnClick() {
    navigate("/login");
  }
  if (props.authenticated === true) {
    return (
      <div className="body" id="home">
        <h1>Welcome, {props.userFirst}!</h1>
        <div>
          <button onClick={(e) => {navigate('trips')}} className="button">Open Existing Trip</button>
        </div>
        <div>
          <Link to="newtrip">
            <button className="button">Create New Trip</button>
          </Link>
        </div>
        <div>
          <button className="button">Create New List Template</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Invalid Login information</h1>
        <button className="button" onClick={handleReturnClick}>Return to Login</button>
      </div>
    );
  }
}

export default UserHome;

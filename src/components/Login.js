import React from "react";
import { useState } from "react";

function Login(props) {
  const [emailCredential, setEmailCredential] = useState("");
  const [passCredential, setPassCredential] = useState("");

  function handleEmailChange(e) {
    setEmailCredential(e.target.value);
  }

  function handlePassChange(e) {
    setPassCredential(e.target.value);
  }

  function handleClick(e) {
     e.preventDefault();
     let email = emailCredential;
     let pass = passCredential;
     
     props.userLogin(email, pass);

     setEmailCredential("");
     setPassCredential("");
   }

  return (
    <div id="loginpage">
      <h1 id="loginwelcome">Log-In</h1>
      <h2 id="logintagline">It's Time To Plan Your Next Adventure</h2>
      <form id="loginform">
        <label>E-mail</label>
        <input
          onChange={handleEmailChange}
          value={emailCredential}
          type="email"
          name="email"
        />
        <br></br>
        <label>Password</label>
        <input
          onChange={handlePassChange}
          value={passCredential}
          type="password"
          name="pass"
        />

        <br></br>
        <span id="loginsubmit">
          <input
            onClick={handleClick}
            className="button"
            type="submit"
            name="signin"
          />
        </span>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  function newUser() {
    axios
      .post("http://localhost:3456/api/user", {
        user_email: email,
        user_password: pass,
        first_name: firstName,
        last_name: lastName,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassChange(e) {
    setPass(e.target.value);
  }

  function handleFirstChange(e) {
    setfirstName(e.target.value);
  }

  function handleLastChange(e) {
    setlastName(e.target.value);
  }

  return (
    <div id="signupscreen">
      <h1 id="welcome">Welcome</h1>
      <h2 id="tagline">Create an Account to Plan your next Adventure!</h2>
      <form id="acctCreationForm">
        <label>E-mail</label>
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          name="email"
        />

        <br></br>
        <label>Password</label>
        <input
          onChange={handlePassChange}
          value={pass}
          type="password"
          name="password"
        />

        <br></br>
        <label>First Name</label>
        <input
          onChange={handleFirstChange}
          value={firstName}
          type="text"
          name="firstname"
        />

        <br></br>
        <label>Last Name</label>
        <input
          onChange={handleLastChange}
          value={lastName}
          type="text"
          name="lastname"
        />

        <br></br>
        <span id="welcomesubmit">
          <input
            onClick={newUser}
            className="button"
            type="submit"
            name="signin"
          />
        </span>
      </form>
    </div>
  );
}

export default Signup;

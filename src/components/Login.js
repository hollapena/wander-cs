import React from 'react';
import {useState} from 'react';

function Login() {

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  return (
    <div id="loginpage">
      <h1 id="loginwelcome">Welcome Back</h1>
      <h2 id="logintagline">Log-In and Plan your Next Adventure</h2>
      <form id="loginform">
        <label>E-mail</label>
        <input type="email" name="email" />

        <br></br>
        <label>Password</label>
        <input type="password" name="password" />

        <br></br>
        <span id="loginsubmit">
          <input class="button" type="submit" name="signin" />
        </span>
      </form>
    </div>
  )
}

export default Login

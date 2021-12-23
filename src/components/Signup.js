import React from 'react';
import {useState} from 'react';

function Signup() {

  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div id="signupscreen">
      <h1 id="welcome">Welcome</h1>
      <h2 id="tagline">Create an Account to Plan your next Adventure!</h2>
      <form id="acctCreationForm">
        <label>E-mail</label>
        <input type="email" name="email" />

        <br></br>
        <label>Password</label>
        <input type="password" name="password" />

        <br></br>
        <label>First Name</label>
        <input type="text" name="firstname" />

        <br></br>
        <label>Last Name</label>
        <input type="text" name="lastname" />

        <br></br>
        <span id="welcomesubmit">
          <input class="button" type="submit" name="signin" />
        </span>
      </form>
    </div>
  );
}

export default Signup

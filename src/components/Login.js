import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Login(props) {
  const [emailCredential, setEmailCredential] = useState("");
  const [passCredential, setPassCredential] = useState("");
  
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");

  // let navigate = useNavigate();

  // function userLogin(e) {
  //   e.preventDefault();
    
  //   axios
  //     .get(`http://localhost:3456/api/user/?email='${emailCredential}'&pass='${passCredential}'`)
  //     .then((res) => {
  //       console.log(res.data[0]);
  //       if (res.data[0].user_password === passCredential) {
  //         props.setUserFirst(res.data[0].first_name);
  //         props.setUserLast(res.data[0].last_name);
  //         props.setUserEmail(res.data[0].user_email);
  //         props.setUserPass(res.data[0].user_password);
  //         props.setUserId(res.data[0].user_id);
  //         props.setAuthenticated(true);
  //         navigate('/home');
  //         console.log(props);
          
  //       } else {
  //         alert("Not a valid email/password combination, Try again");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setEmailCredential("");
  //   setPassCredential("");
  // }

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
      <h1 id="loginwelcome">Welcome Back</h1>
      <h2 id="logintagline">Log-In and Plan your Next Adventure</h2>
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

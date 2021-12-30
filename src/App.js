import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from "./components/Login";
import User from "./components/User"
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function App() {
  const [userFirst, setUserFirst] = useState('');
  const [userLast, setUserLast] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userId, setUserId] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);

  // function getStuff(){
  //   axios.get('http://localhost:3456/api/getdb')
  //   .then((res) => {
  //     console.log(res)
  //     setData(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // useEffect(() => {
  //   getStuff();
  // },[]);

  let navigate = useNavigate();

  function userLogin(email, pass) {
    
    axios
      .get(
        `http://localhost:3456/api/user/?email='${email}'&pass='${pass}'`
      )
      .then((res) => {
        
        if (res.data[0].user_password === pass) {
          setUserFirst(res.data[0].first_name);
          setUserLast(res.data[0].last_name);
          setUserEmail(res.data[0].user_email);
          setUserPass(res.data[0].user_password);
          setUserId(res.data[0].user_id);
          setAuthenticated(true);
          navigate("/home");
        } else {
          alert("Not a valid email/password combination, Try again");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Routes>
        <Route id="welcome-screen" path="/" element={<Welcome />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="login"
          element={
            <Login
              userLogin={userLogin}
              authenticated={authenticated}
            />
          }
        />
        <Route
          path="home/*"
          element={
            <User
              userFirst={userFirst}
              userLast={userLast}
              userEmail={userEmail}
              userId={userId}
              userPass={userPass}
              authenticated={authenticated}
             />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

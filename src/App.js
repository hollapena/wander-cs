import './App.css';
import {Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">

      <header className="App-header"></header>

      <Routes>
        <Route id="welcome-screen" path="/" element={<Welcome />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <footer className="App-footer"></footer>

    </div>
  );
}

export default App;

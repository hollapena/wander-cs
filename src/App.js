import './App.css';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <div>
        <Welcome />
        <Signup />
        <Login />
      </div>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;

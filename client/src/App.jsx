import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;

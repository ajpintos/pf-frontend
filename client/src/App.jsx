import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Store from "./components/Store/Store";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
//axios.defaults.baseURL = "https://biofresh.shop/backend/"; //para deploy
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path='/' element={<NavBar/>} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/store/:id" element={<Store />}></Route>
        </Routes>
    </div>
  );
}

export default App;

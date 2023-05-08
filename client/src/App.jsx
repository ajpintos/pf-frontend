import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </div>
  );
}

export default App;

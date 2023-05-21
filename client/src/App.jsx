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
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import FormUdateMyaccount from "./components/MyAccount/Components/FormUpdate/FormUpdate";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "../src/components/NavBar/NavBar.jsx";
import Title from "./components/Title/Title.jsx";

//axios.defaults.baseURL = "https://biofresh.shop/backend/"; //para deploy
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      {/* Cabecera */}
      <header className="container-fluid">
        {/* Sección del logo, login, favoritos y carrito */}
        <div className="row justtify-content-center align-items-center">
          <Title />
        </div>
        <NavBar/>
      </header>
      <div className="App-header"></div>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/:id" element={<Store />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/form_update" element={<FormUdateMyaccount />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <footer className="container-fluid" >
        <Footer />
      </footer>
    </div>
  );
}

export default App;

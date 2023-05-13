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
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import {gapi} from "gapi-script";
import {Link} from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar.jsx";
import imgpropia from "../src/logo/logo.png";
import { useEffect } from "react";

//axios.defaults.baseURL = "https://biofresh.shop/backend/"; //para deploy
axios.defaults.baseURL = "http://localhost:3001";

function App() {

  // const user = {name: "Javier"}
  const user = useSelector(state => state.userLogin);

  //! Autenticación con Google
  const clientID = "932914293926-uo3dpst96jr8s51di1mmbhdh3j2gie6a.apps.googleusercontent.com";
  useEffect(() => {
      const start = () => {
          gapi.auth2.init({
              clientId: clientID,
          })
      }
      gapi.load("client:auth2", start);
  },[])

  const onSuccess = (response) => {
      console.log(response)
  }

  const onFailure = (response) => {
      console.log("Something went wrong", response)
  }
  //! --------------------------------------

  return (
    <div className="App">
      <div className="App-header">
      </div>

      {/* Cabecera */}
      <header>
        {/* Sección del logo, login, favoritos y carrito */}
        <div className="row justtify-content-center align-items-center">
          {/*<Title />*/}
          <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
              <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0'/>
          </figure>

          {user.email ?
            <Link to="/myaccount" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
              🙋‍♂️ {user.firstname}
            </Link>
            :
            <Link to="/login" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
              🙋‍♂️ Login
            </Link>
          }
          <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
          <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Cart</Link>
          <GoogleLogin
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_policy"}
          />
        </div>

          <NavBar/>

      </header>






        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/store/:id" element={<Store />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <footer className="container-fluid" >
          <Footer />
        </footer>
    </div>
  );
}

export default App;

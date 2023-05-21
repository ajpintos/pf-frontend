import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Store from "./components/Store/Store.jsx";
import axios from "axios";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import FormUdateMyaccount from "./components/MyAccount/Components/FormUpdate/FormUpdate.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "../src/components/NavBar/NavBar.jsx";
import Title from "./components/Title/Title.jsx";
import CartPage from './components/CartPage/CartPage.jsx';
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//axios.defaults.baseURL = "https://biofresh.shop/backend/"; //para deploy
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  
  const [ whereIAm, setWhereIAm ] = useState({
    place: '',
    order: '',
    filter: '',
    name: '',
    currentPage: 1
  });

  function hereIAm (IAmData) {
    setWhereIAm(IAmData);
  };

  // de aqui hasta el useEffect son para cargar usuario y orden de prueba de carrito

  // const dispatch = useDispatch();
  // const userLogin = useSelector(state=>state.userLogin);

  // const loadingUser = async () => {

  //   let loginUser = userLogin;
  //   console.log('loginuser al entrar ', loginUser)

  //     // const localizaPepito = await axios.get('/users?email=pepito@pepito.com');
  //     // console.log('localizaPepito ', localizaPepito);
  //     // loginUser = localizaPepito.data;


  //       console.log('entre a registrar a pepito');
  //       const userData = {
  //         email: 'pepito@pepito.com',
  //         password: 'P1234567p',
  //         firstname: 'Pepito',
  //         lastname: 'Dominguez',
  //         address: 'address',
  //         city: 'city',
  //         cp: '12345',
  //         phone: '1234567890',
  //         country: 'country'
  //       }
  //       const logUser = await axios.post('/users', userData);
  //       console.log(logUser);
  //       loginUser = userData;
  //       console.log('pepito registrado');
  
  //     dispatch({
  //       type: 'LOGIN_USER',
  //       payload: loginUser.email
  //     });
  // };

  // useEffect(()=>{
  //   loadingUser();
  // },[]);

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
      <Routes>
        <Route path="/" element={<LandingHome whereIAm={whereIAm} hereIAm={hereIAm} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/detail/:id" element={<Detail whereIAm={whereIAm} hereIAm={hereIAm} />} />
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/store" element={<Store whereIAm={whereIAm} hereIAm={hereIAm} />} />
        <Route path="/store/:id" element={<Store whereIAm={whereIAm} hereIAm={hereIAm} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form_update" element={<FormUdateMyaccount />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />
      </Routes>
      <footer className="container-fluid" >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
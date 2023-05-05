import s from "./Landing_home.module.css";
import imgpropia from "../../logo/logo.png";
import {Link} from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar";
import Settings from "../Settings/Settings";
import SearchBar from "../SearchBar/SearchBar";

const Landing_home = () => {
  
  return (
    <div className="container-fluid">

      {/* Cabecera */}
      <header>
        {/* Sección del logo, login, favoritos y carrito */}
        <div className="row justtify-content-center align-items-center">
          <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
            <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0' />
          </figure>
          {/* <SearchBar/> */}
          <Link to="/login" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">🙋‍♂️</Link>
          <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🧡</Link>
          <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🛒</Link>
        </div>

        {/* Sección de NavBar y Settings */}

        <div className="d-flex flex-row justify-content-around bg-success">
          <NavBar/>
          <SearchBar/>
          <Settings />
        </div>

        {/* Sección Hero */}
        <div className={s.hero}>
          <h1 className={s.text}>HERO</h1>
        </div>
      </header>

      {/* Sección Cards */}
      <section>
        <h2 className={s.feactured_products}>FEATURED PRODUCTS</h2>
        <CardContainer/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing_home;

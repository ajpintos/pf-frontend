import s from "./Landing_home.module.css";
import imgpropia from "../../logo/logo.png";
import {Link} from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Footer from '../Footer/Footer.jsx';

const Landing_home = () => {
  
  return (
    <div className={s.container}>

      {/* Cabecera */}
      <header>

        {/* Sección del logo, login, favoritos y carrito */}
        <div className={s.container_inicio}>
          <img src={imgpropia} alt="imagen" className={s.logo} />
          <input type="text" placeholder="Search..." className={s.search} />
          <button className={s.my_acount}><Link to="/login">🙋‍♂️My account</Link></button>
          <button className={s.whishlist}>🧡Whishlist</button>
          <button className={s.amount}>🛒AMOUNT</button>
          <br />
          <br />
        </div>

        {/* Sección de NavBar y Settings */}
        <div className={s.container_settings}>
          <div className={s.navBar}> 
            <button className={s.home}>HOME</button>
            <button className={s.categories}>CATEGORIES</button>
            <button className={s.about_us}>ABOUT US</button>
            <button className={s.contact_us}>CONTACT US</button>
          </div>
          <button className={s.settings}>SETTINGS</button>
        </div>

        {/* Sección Hero */}
        <h1 className={s.hero}>HERO</h1>

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

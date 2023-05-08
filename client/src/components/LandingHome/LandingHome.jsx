import s from "./Landing_home.module.css";
import imgpropia from "../../logo/logo.png";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar";

const Landing_home = () => {
  return (
    <div className={s.container}>
      {/* Cabecera */}
      <header>
        {/* Sección del logo, login, favoritos y carrito */}
        <div className={s.container_inicio}>
          <img src={imgpropia} alt="imagen" className={s.logo} />
          <input type="text" placeholder="Search..." className={s.search} />
          <button className={s.my_acount}>
            <Link to="/login">🙋‍♂️My account</Link>
          </button>
          <Link to={"/favorites"}>
            <button className={s.whishlist}>🧡Whishlist</button>
          </Link>
          <button className={s.amount}>🛒AMOUNT</button>
          <br />
          <br />
        </div>

        {/* Sección de NavBar y Settings */}

        <NavBar />

        {/* Sección Hero */}
        <div className={s.hero}>
          <h1 className={s.text}>HERO</h1>
        </div>
      </header>

      {/* Sección Cards */}
      <section>
        <h2 className={s.feactured_products}>FEATURED PRODUCTS</h2>
        <CardContainer />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing_home;

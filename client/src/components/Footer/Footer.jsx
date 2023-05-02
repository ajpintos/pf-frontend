import s from "./Footer.module.css";
import imgpropia from "../../logo/logo.png";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container_final} >
        <figure>
          <img src={imgpropia} alt="Biofresh Logo" className={s.logoBiofresh} />
        </figure>
        <article className={s.container_info}>
          <h4>
            INFORMATION
          </h4>
          <p className="">
          This web page is the result of the Final Project of Henry's FullStack Master.
          </p>
        </article>
        <article className={s.container_info}>
          <h4>Group 5 of cohort Pt-10b</h4>
          <p>
            Juan Cruz Matanzo <br/>
            Santiago Muller <br/>
            Javier Pintos <br/>
            Mauricio Mendez <br/>
            Santiago Dias <br/>
            Mario A. Benitez D. <br/>
            Johan Quimbaya 
          </p>
        </article>
        <article className={s.container_info}>
          <h4>
            MENU
          </h4>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </article> 
      </div>
      <h5 className={s.copyright}>Copyright 2023</h5>
    </div>
  )
};

export default Footer;
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Busca y compra los productos naturales de tu interes</h1>

      <input
        type="email"
        name=""
        id=""
        placeholder="email"
        className={style.email}
      />
      <br />
      <input
        type="password"
        name=""
        id=""
        placeholder="contraseña"
        className={style.contraseña}
      />
      <br />
      <button className={style.ingresar}>
        <Link>ingresar</Link>
      </button>
      <br />
      <button className={style.crear}>
        <Link>crear usuario</Link>
      </button>
    </div>
  );
};

export default Landing;

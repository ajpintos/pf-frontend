import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


import style from "./Detail.module.css";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  

  const getProductForId = async () => {
    try {
      const Data = await axios(`http://localhost:3001/products/${id}`);
      const char = Data.data;
      console.log(char);
      if (char) {
        setProduct(char);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  React.useEffect(() => {
    getProductForId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);



  const validacion = () => {};

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.container2}>
        <div className={style.contInfTitle}>
          <h3 className={style.title}>{product.name}</h3>
          <p> {product.description}</p>
        </div>

        <img src={product.image} alt={product.name} width="320" height="320" />
        <div className={style.contInf}>
          <div className={style.price}>
            <label>$ </label>
            {product.price}
          </div>
          <div>
            <label>Disponibles: </label>
            {product.stock}
          </div>

          <div>
            <label>
              Cantidad:
              <input
                type="number"
                className={style.cantidad}
                min={1}
                max={product.stock}
                onChange={validacion}
              />{" "}
            </label>
          </div>
          <button className={style.btn}> Add to Cart 🛒</button>
          <button>❤️</button>
        </div>
      </div>
      <Link to="/">
        <button className={style.btn}>◁◁ Volver</button>
      </Link>
      {/* onClick={backToHome} */}
    </div>
  );
};
export default Detail;

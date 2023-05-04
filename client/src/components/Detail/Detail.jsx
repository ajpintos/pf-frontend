import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import style from "./Detail.module.css";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [cant, setCant] = React.useState(1);

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

  const validacion = (e) => {
    setCant(e.target.value);
  };

  return (
    <div className={style.container}>
      <div class="container">
        <NavBar />
      </div>
      <div class="border border-danger container-fluid">
        <div class="row">
          <div class="col">
            <img
              src={product.image}
              alt={product.name}
              width="320"
              height="320"
            />
          </div>

          <div class="col-md">
            <h1 className={style.title}>{product.name}</h1>

            <h2 className={style.price}>${product.price}</h2>
            <p> {product.description}</p>
            <div>
              Disponibles:
              {product.stock}
            </div>

            <div>
              <input
                type="number"
                className={style.cantidad}
                value={cant}
                min={1}
                max={product.stock}
                onChange={validacion}
              />
              <button className={style.btn}> Add to Cart 🛒</button>
            </div>
            <br />
            <button>❤️</button>
          </div>
        </div>
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      ></link>
    </div>
  );
};
export default Detail;

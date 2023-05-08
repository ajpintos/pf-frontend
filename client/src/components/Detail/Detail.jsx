import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import style from "./Detail.module.css";
import NavBar from "../NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
      <div>
        <NavBar />
      </div>
      <div class=" container-fluid mt-5">
        <div class="row ">
          <div class="col  ">
            <img
              src={product?.image}
              alt={product?.name}
              width="320"
              height="320"
            />
          </div>

          <div class="col-md ">
            <h1 class=" text-start">{product.name}</h1>

            <h2 class="text-start">${product.price}</h2>
            <p class=" text-start "> {product.description}</p>
            <div class="row  text-start">
              <strong class="col-3  text-start me-2    ">Disponibles:</strong>
              <strong class="col  me-2 text-success">
                {" "}
                {product.stock} disponibles
              </strong>
            </div>

            <div class="mt-1   text-start ">
              <input
                type="number"
                value={cant}
                min={1}
                max={product.stock}
                onChange={validacion}
                style={{ width: "60px", marginTop: "10px" }}
              />

              <button
                style={{
                  borderRadius: "10px",
                  fontSize: "13px",
                  textAlign: "center",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                {" "}
                Add to Cart 🛒
              </button>
            </div>
            <br />
            <div class="row">
              <div class="col text-start">
                <button style={{ borderRadius: "1rem" }}>❤️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;

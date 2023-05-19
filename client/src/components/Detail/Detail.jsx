import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { foundOrderForDetail } from "../Cart/cartHelpers";
import { AddToCartIcon } from "../Icons/Icons";
// import "bootstrap/dist/css/bootstrap.min.css";

const Detail = () => {

  const userLogin = useSelector(state=>state.userLogin);

  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [cant, setCant] = React.useState(1);

  const getProductForId = async () => {
    try {
      const Data = await axios(`/products/${id}`);
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
    console.log('cant ', cant);
    setCant(e.target.value);
    console.log('cant dos ', cant);
  };

  const addToCart = async () => {
    const orderUser = await foundOrderForDetail(userLogin);
    const detailsData = {
      idOrder: orderUser.id,
      idProduct: id,
      units: parseInt(cant)
    };
    console.log('detailsData ',detailsData);
    const detailCreated = await axios.post('/ordersDetails', detailsData);
  };

  return (
    <div>
      <div className="row  text-center ">
        <div className="container ">
          <h1>DETAIL</h1>
          <div className="row">
            <div className="col">
              <img
                src={product?.image}
                alt={product?.name}
                width="320"
                height="320"
              />
            </div>

            <div className="col">
              <h1>{product.name}</h1>

              <h2>${product.price}</h2>
              <p> {product.description}</p>
              <div>
                <strong>Available:</strong>
                <strong> {product.stock} units</strong>
              </div>

              <div>
                <input
                  type="number"
                  value={cant}
                  min={1}
                  max={product.stock}
                  onChange={validacion}
                  style={{ width: "60px", marginTop: "10px" }}
                />

                <Button variant="btn btn-success mt-2" className="col-6 offset-3" onClick={addToCart}><AddToCartIcon/></Button>
              </div>
              <br />
              <div>
                <div>
                  <button style={{ borderRadius: "1rem" }}>❤️</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Detail;
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { foundOrderForDetail } from "../Cart/cartHelpers";
import { AddToCartIcon } from "../Icons/Icons";

const Detail = ({ whereIAm, hereIAm }) => {

  const userLogin = useSelector(state=>state.userLogin);
  const nameProducts = useSelector(state=>state.nameProducts);
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [cant, setCant] = React.useState(1);

  const getProductForId = async () => {
    try {
      const Data = await axios(`/products/${id}`);
      const char = Data.data;
      if (char) {
        setProduct(char);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  const validacion = (e) => {
    setCant(e.target.value);
  };

  const addToCart = async () => {
    if (userLogin !== '') {
      const orderUser = await foundOrderForDetail(userLogin);
      const detailsData = {
        idOrder: orderUser.id,
        idProduct: id,
        units: parseInt(cant)
      };
      const detailCreated = await axios.post('/ordersDetails', detailsData);
    };

  };

  const returnTo = () => {
    const returnWhere = whereIAm;
    hereIAm({
      place: 'detail',
      order: returnWhere.order,
      filter: returnWhere.filter,
      name: nameProducts,
      currentPage: returnWhere.currentPage
    });
    console.log('salgo de details con ',whereIAm);
    navigate('/'+returnWhere.place);
  }

  const escape = () => {
    const returnWhere = whereIAm;
    hereIAm(returnWhere);
    console.log('entro a deatils con ', returnWhere);
  };

  useEffect(()=>{
    getProductForId();
    escape();
  },[]);

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

                <Button variant="btn btn-success mt-2 col-2" className="col-6 offset-3" onClick={addToCart}><AddToCartIcon/></Button>
              </div>
              <br />
              <div>
                <button style={{ borderRadius: "1rem" }}>❤️</button>
                <Button variant="btn btn-success mt-2" className="col-4 offset-3" onClick={returnTo} >Return {whereIAm.place === '' ? 'Home' : whereIAm.place}</Button>
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
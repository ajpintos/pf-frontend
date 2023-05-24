import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { cartFoundIndex, foundOrderForDetail, getCartDetail } from "../Cart/cartHelpers.js";
import { AddToCartIcon } from "../Icons/Icons";
import { add_ToCart, remove_FromCart } from "../../Redux/actions/actionsCart.js";
import swal from 'sweetalert';

const Detail = ({ whereIAm, hereIAm }) => {

  const user = useSelector(state=>state.userLogin);
  const nameProducts = useSelector(state=>state.nameProducts);
  const cartDetails = useSelector(state=>state.cartDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      swal("Error","Product not found", "error");
    }
  };

  const validacion = (e) => {
    setCant(e.target.value);
  };

  const addToCart = async () => {
    let productModify = {
      idOrder: '',
      idOrderDetail: '',
      idProduct: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      units: parseInt(cant),
      price: product.price,
      tax: product.tax,
      stock: product.stock,
      amount: (product.price * parseInt(cant)),
      taxAmount: (product.price * parseInt(cant)) * product.tax,
      totalAmount: ( (product.price * parseInt(cant)) * product.tax ) + (product.price * parseInt(cant)),
    };
    let detailFlag = false;
    if (cartDetails.length > 0) {
      let unitsProduct = cartFoundIndex(product.id, cartDetails);
      if (unitsProduct !== null) {
        const detailFound = await getCartDetail(product.id, cartDetails);
        dispatch(remove_FromCart(product.id, cartDetails));
        unitsProduct = unitsProduct + parseInt(cant);
        productModify = {
          ...productModify, 
          idOrder: detailFound.idOrder,
          idOrderDetail: detailFound.idOrderDetail,
          units: unitsProduct,
          amount: (product.price * unitsProduct),
          taxAmount: (product.price * unitsProduct) * product.tax,
          totalAmount: ( (product.price * unitsProduct) * product.tax ) + (product.price * unitsProduct),
        };
        detailFlag = true;
      };
    };
    if (!detailFlag && user.email) {
      const orderUser = await foundOrderForDetail(user.email);
      const detailsData = {
        idOrder: orderUser.id,
        idProduct: id,
        units: 1
      };
      const detailCreated = await axios.post('/ordersDetails', detailsData);
      productModify = {
        ...productModify,
        idOrder: detailsData.idOrder,
        idOrderDetail: detailCreated.data.id,
      };
    };
    dispatch(add_ToCart(productModify, cartDetails));
    localStorage.setItem('cartDetails', JSON.stringify(cartDetails));
    if (user.email) {
      const updateData = {
        idDetail: productModify.idOrderDetail,
        units: productModify.units,
      };
      console.log('updateData en Detalle ', updateData);
      const orderDetailUpdate = await axios.put('/ordersDetails', updateData );
    };
    swal("Congratulations", "Product added to cart", "success");
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
    navigate('/'+returnWhere.place);
  }

  const escape = () => {
    const returnWhere = whereIAm;
    hereIAm(returnWhere);
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
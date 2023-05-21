import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { AddToCartIcon } from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartFoundIndex, foundOrderForDetail } from "../Cart/cartHelpers";
import { add_ToCart, remove_FromCart } from "../../Redux/actions/actionsCart";

function Card({ id, name, image, description, price, tax, stock, priceFlag }) {

  const dispatch = useDispatch();

  const userLogin = useSelector(state=>state.userLogin);
  const cart = useSelector(state=>state.cart);
  const cartDetails = useSelector(state=>state.cartDetails);

  const addToCart = async () => {
    if (userLogin !== '') {
      const orderUser = await foundOrderForDetail(userLogin);
      const detailsData = {
        idOrder: orderUser.id,
        idProduct: id,
        units: 1
      };
      const detailCreated = await axios.post('/ordersDetails', detailsData);
    };
    let product = {
      idOrderDetail: '',
      idProduct: id,
      name: name,
      description: description,
      image: image,
      units: 1,
      tax: tax,
      stock: stock,
      amount: price,
      taxAmount: price * tax,
      totalAmount: ( price * tax ) + price,
    };
    let order;
    if (cartDetails.length > 0) {
      let unitsProduct = cartFoundIndex(product.idProduct, cartDetails);
      if (unitsProduct !== null) {
        dispatch(remove_FromCart(product.idProduct, cartDetails));
        unitsProduct = unitsProduct + 1;
        product = {
          ...product, 
          units: unitsProduct,
          amount: (price * unitsProduct),
          taxAmount: (price * unitsProduct) * tax,
          totalAmount: ( (price * unitsProduct) * tax ) + (price * unitsProduct),
        };
      };
      let amountO= 0;
      let taxAmountO = 0;
      let totalAmountO = 0;
      for (let i=0; i < cartDetails.length; i++) {
        amountO = amountO + cartDetails[i].amount;
        taxAmountO = taxAmountO + cartDetails[i].taxAmount;
        totalAmountO = totalAmountO + cartDetails[i].totalAmount;
      };
      order = {
        idOrder: '',
        amount: amountO + product.amount,
        taxAmount: taxAmountO + product.taxAmount,
        totalAmount: totalAmountO + product.totalAmount,
      };
    } else {
      order = {
        idOrder: '',
        amount: product.amount,
        taxAmount: product.taxAmount,
        totalAmount: product.totalAmount,
      };
    };
    dispatch(add_ToCart({ order, product }));
    window.alert('Product added to cart');
  };

  return (
    <div className="col-8 offset-2 py-1 px-3 col-sm-6 offset-sm-0 py-sm-1 px-sm-3 col-md-6 offset-md-0 py-md-1 px-md-3 col-lg-4 offset-lg-0 py-lg-1 px-lg-3 col-xl-3 offset-xl-0 py-xl-1 px-xl-3 mt-1 mb-3 text-center">
      {name ? (
        <div className="card">
          <div className="card-body">
            <Link to={`/detail/${id}`}>
              <img src={image} className="card-img-top img-fluid" alt={name} />
            </Link>
            <h5 className="card-title">{name}</h5>
            <p className="card-text mb-0">{description}</p>
            { priceFlag && 
              <div className="col mt-1">
                  <p className="col-6 offset-3" ><strong>$ {price}</strong></p>
              </div>
              }
            <div className="row">
              <Button variant="btn btn-success mt-2" className="col-6 offset-3" onClick={addToCart}><AddToCartIcon/></Button>
            </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default Card;
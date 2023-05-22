import axios from "axios";
import { useSelector } from "react-redux";

export const foundOrderForDetail = async (userLogin) => {
  let orderFlag = false;
  let orderUser;
  let foundUser = await axios.get('/users?email='+userLogin);
  const userFound = foundUser.data.email;
  const orderUserfound = foundUser.data.orders;
  for (let i=0; i < orderUserfound.length; i++) {
    const orderUserFound = await axios.get('/orders/'+orderUserfound[i].id);
    orderUser = orderUserFound.data
    if (orderUser.orderStatus === 'Cart') {
      orderFlag = true;
      i = orderUserfound.length;
    };
  };
  if (!orderFlag) {
    const orderCreate = await axios.post('/orders', { userId : userFound });
    orderUser = orderCreate.data;
  };
  return orderUser;
};

export const cartFoundIndex = (idProduct, cartDetails) => {
  for (let i=0; i < cartDetails.length; i++) {
    if (cartDetails[i].idProduct === idProduct) return cartDetails[i].units;
  };
  return null;
};

export const getCartDetail = (idProduct, cartDetails) => {
  for (let i=0; i < cartDetails.length; i++) {
    if (cartDetails[i].idProduct === idProduct) return cartDetails[i];
  };
  return null; 
}
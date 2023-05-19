import axios from "axios";

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
  window.alert('Product added to cart');
  return orderUser;
};
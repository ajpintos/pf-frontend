import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import { RemoveFromCartIcon } from '../Icons/Icons'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'

const CartPage = () => {

  const loginUser = useSelector(state=> state.loginUser);

  const [ productsCart, setProductsCart ] = useState({
    id: '',
    productId: '',
    orderId: '',
    units: 0,
    price: 0,
    amount: 0,
    tax: 0,
    taxAmount: 0,
    totalAmount: 0
  });
  const [ order, setOrder ] = useState({
    id: '',
    amount: 0,
    taxAmount: 0,
    totalAmount: 0
  });

  const updatedCart = async (idDetail, units) => {
    const updateData = {
      idDetail: idDetail,
      units: units
    };
    // if(loginUser !== '') {
    // }
    const orderDetailUpdate = await axios.put('/ordersDetails', updateData);
  };

  const removeToCart = async (idDetail) => {
    const orderDetailDelete = await axios.delete('/ordersdetails', { idDetail: idDetail });
  };

  const loadingCart = async () => {


  };

  useEffect(()=>{
    loadingCart();
  },[]);

  return (
    <Container className='container-fluid'>
      <h1>🛒 Cart</h1>
      <section className='col' >
        { productsCart.length > 0 && productsCart.map(prod => 
          {
            return (
              <article className='row' key={productsCart.id}>
                <figure className='container-fluid'>
                  <img src={productsCart.image} alt={productsCart.name} />
                </figure>
                <p className='h5' >{productsCart.name}</p>
                <p className='h5' >{productsCart.units}</p>
                <p className='h5' >{productsCart.price}</p>
                <Button className='btn' onClick={updatedCart}>+</Button>
                <Button className='btn' onClick={removeToCart}><RemoveFromCartIcon /></Button>
              </article>    
            )
          }
        )}
      </section>
      <section>
        <h4>Total</h4>
        <p>${order.amount}</p>
        <p>${order.taxAmount}</p>
        <p>${order.totalAmount}</p>
      </section>
    </Container>
  )
}

export default CartPage
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import { RemoveFromCartIcon } from '../Icons/Icons'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import ListGroup from 'react-bootstrap/esm/ListGroup';
import accounting from 'accounting';

const CartPage = () => {

  const loginUser = useSelector(state=> state.loginUser);

  const productsArray = [
    {
      name: "Almonds",
      image: "https://biofresh.shop/img/almendras.jpg",
      description: "Nut rich in healthy fats, protein and fiber.",
      price: 2.50,
      stock: 50,
      arrayCategories: ['Nuts']
    },
    {
      name: "Dates",
      image: "https://biofresh.shop/img/datiles.jpg",
      description: "Dried fruit rich in fiber and vitamins.",
      price: 3.50,
      stock: 30,
      arrayCategories: ['Nuts']
    },
    {
      name: "Prunes",
      image: "https://biofresh.shop/img/pasas.jpg",
      description: "Dried fruit rich in fiber, antioxidants and beneficial compounds for health.",
      price: 4.00,
      stock: 20,
      arrayCategories: ['Nuts']
    },
  ]

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
      <div className="container">
        <div className="row my-2">
          <div className="col-12">
            <h1 className="page-header">Shopping Cart</h1>
          </div>
          {/* {productsCart.length < 1 ?
            <div class="row">
              <section class="col-12">
                <div class="bg-secondary alert text-white">The shopping cart is currently empty. You can go back and start adding products.</div>
                <a href="/store" class="btn btn-link" title="← Go back & Keep Shopping">← Go back & Keep Shopping</a>
              </section>
            </div> :
            productsCart.map(product => {
              <article className='row' key={productsCart.id}>
                <figure className='container-fluid'>
                  <img src={productsCart.image} alt={productsCart.name} />
                </figure>
                <p className='h5' >{productsCart.name}</p>
                <p className='h5' >{productsCart.units}</p>
                <p className='h5' >{productsCart.price}</p>
              </article>
            </div>
            })
          } */}
        </div>
        <div className="row">
            <div className="col-lg-9 mb-4">
              <form id="cart-update-form" method="post" action="/cart/update">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th className="mob-hide"></th>
                        <th className="mob-hide">Unit Price</th>
                        <th className="table-qty">Qty</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {productsArray.length < 1 ?
                      <div class="row">
                        <section class="col-12">
                          <div class="bg-secondary alert text-white">The shopping cart is currently empty. You can go back and start adding products.</div>
                          <a href="/store" class="btn btn-link" title="← Go back & Keep Shopping">← Go back & Keep Shopping</a>
                        </section>
                      </div> :
                      productsArray.map(product => {
                        <tr>
                        <td>
                          {/* <p className='h5' >{productsCart.name}</p> */}
                          <p className='h5' >{product.name}</p>
                        </td>
                        <td className="text-center mob-hide">
                          <figure className='container-fluid'>
                            {/* <img src={productsCart.image} alt={productsCart.name} /> */}
                            <img src={product.image} width={90} height={90} alt={product.name} />
                          </figure>
                        </td>
                        <td className="mob-hide">
                          {/* <span>{accounting.formatMoney(`${productsCart.price}`)}</span> */}
                          <span>{accounting.formatMoney(`${product.price}`)}</span>
                        </td>
                        <td>
                          <select name="" id="">
                            <option value="" selected>1</option>
                            <option value="" selected>2</option>
                            <option value="" selected>3</option>
                            <option value="" selected>4</option>
                            <option value="" selected>5</option>
                            <option value="" selected>6</option>
                          </select>
                          <div>
                            <Button className='btn' variant="light" onClick={updatedCart}>+</Button>
                          </div>
                          <div>
                            <Button className='btn' variant="danger" onClick={removeToCart}><RemoveFromCartIcon /></Button>
                          </div>
                        </td>
                        <td>
                          <p>{accounting.formatMoney(`${productsCart.amount}`)}</p>
                        </td>
                        <td className="text-right">
                          <a href="/cart/remove_product/137627033" className="cart-product-remove" title="Remove Product">
                            <i className="fas fa-times-circle"></i>
                          </a>
                        </td>
                      </tr>
                    })}
                    </tbody>
                  </table>
                </div>
              <input type="hidden"/></form>
            </div>
          <div className="col-lg-3 mb-4">
            <div className="col-12">
              <h1 className='text-center'>Total Order</h1>
              <table className="table bordered table-striped">
                <tbody>
                  <tr>
                    <td className='text-left'><strong>Subtotal: </strong></td>
                    <td className='text-right'><p>{accounting.formatMoney(`${order.amount}`)}</p></td>
                  </tr>
                  <tr>
                    <td className='text-left'><strong>Tax: </strong></td>
                    <td className='text-right'><p>{accounting.formatMoney(`${order.taxAmount}`)}</p></td>
                  </tr>
                  <tr>
                    <td colSpan="1" className="text-left"><strong>Total: </strong></td>
                    <td colSpan="1" className="text-right"><p>{accounting.formatMoney(`${order.totalAmount}`)}</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center cart-actions ">
                <a href="/cart/checkout" className="btn btn-success btn-block mb-3" title="Proceed to Checkout">Proceed to Checkout</a>
                <a href="/store" className="btn btn-success btn-block" title="← Continue Shopping">← Continue Shopping</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CartPage



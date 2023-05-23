import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import { RemoveFromCartIcon } from '../Icons/Icons'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import accounting from 'accounting';
import { useNavigate } from 'react-router-dom'
import { getCartDetail } from '../Cart/cartHelpers'
import { add_ToCart, clear_Cart, remove_FromCart } from '../../Redux/actions/actionsCart'
import { getProductById } from '../../Redux/actions/actionsProducts'

const CartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state=> state.userLogin);
  const cart_Details = useSelector(state=> state.cartDetails);
  const cartDetails = cart_Details;
  console.log('cartDetails ',cartDetails);

  const [ cant, setCant ] = useState(0);

  const validateCant = (e) => {
    e.preventDefault();
    setCant(e.target.value);
  };

  const [ order, setOrder ] = useState({
    id: '',
    amount: 0,
    taxAmount: 0,
    totalAmount: 0
  });

  const updatedCart = async (idProduct) => {
    const productFound = await getProductById(idProduct);
    const cartDetail = await getCartDetail(idProduct, cartDetails);
    console.log('idProduct ',idProduct);
    console.log('cartDetail ',cartDetail);
    console.log('userLogin ', userLogin);
    if (userLogin && userLogin !== undefined && userLogin !== '') {
      const updateData = {
        idDetail: cartDetail.idDetail,
        units: cartDetail.units
      };
      const orderDetailUpdate = await axios.put('/ordersDetails', updateData);
    };
    dispatch(remove_FromCart(idProduct, cartDetails));
    const cart_Detail = { 
      ...cartDetail, 
      units: parseInt(cant),
      precio: productFound.price,
      amount: (productFound.price * parseInt(cant)),
      taxAmount: (productFound.price * parseInt(cant)) * cartDetail.tax,
      totalAmount: ( (productFound.price * parseInt(cant)) * cartDetail.tax ) + (productFound.price * parseInt(cant)),
    }
    dispatch(add_ToCart(cart_Detail, cartDetails));
    updateTotals();
    window.alert('Updated product in cart');
  };

  const removeToCart = async (idProduct) => {
    const cartDetail = await getCartDetail(idProduct, cartDetails);
    if (userLogin && userLogin !== undefined && userLogin !== '') {
      const orderDetailDelete = await axios.delete('/ordersdetails', { idDetail: cartDetail.idDetail });
    };
    dispatch(remove_FromCart(idProduct, cartDetails));
    updateTotals();
  };

  const clearCart = () => {
    if (userLogin && userLogin !== undefined && userLogin !== '') {
    }; 
    dispatch(clear_Cart());
    updateTotals();
  };

  const goToPath = (goPath) => {
    navigate(goPath);
  };

  const updateTotals = async () => {
    const cart_Details = cartDetails;
    let amountO= 0;
    let taxAmountO = 0;
    let totalAmountO = 0;
    for (let i=0; i < cart_Details.length; i++) {
        amountO = amountO + cart_Details[i].amount;
        taxAmountO = taxAmountO + cart_Details[i].taxAmount;
        totalAmountO = totalAmountO + cart_Details[i].totalAmount;
    };
    setOrder({
      idOrder: '',
      amount: amountO,
      taxAmount: taxAmountO,
      totalAmount: totalAmountO,
    });
  };

  useEffect(()=>{
    updateTotals();
  },[]);

  return (
    <Container className='container-fluid'>
      <div className="container">
        <div className="row my-2">
          <div className="col-12">
            <h1 className="page-header">Shopping Cart</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mb-4">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="mob-hide"></th>
                    <th className="mob-hide">Unit Price</th>
                    <th className="table-qty">Qty</th>
                    <th>Update</th>
                    <th>Delete</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartDetails.length < 1
                    ? <div className="row">
                        <section className="col-12">
                          <div className="bg-secondary alert text-white">The shopping cart is currently empty. You can go back and start adding products.</div>
                          <Button className="btn btn-success btn-block mb-1" onClick={()=>goToPath('/store')}>Go Store</Button>
                        </section>
                      </div>
                    : cartDetails.map(product => {
                      return (
                        <tr key={product.idProduct} >
                          <td>
                            <p className='h5' >{product.name}</p>
                          </td>
                          <td className="text-center mob-hide">
                            <figure className='container-fluid'>
                              <img src={product.image} width={90} height={90} alt={product.name} />
                            </figure>
                          </td>
                          <td className="mob-hide">
                            <span>{accounting.formatMoney(`${product.price}`)}</span>
                          </td>
                          <td>
                            <input
                              type="number"
                              // value={cant}
                              min={1}
                              max={product.stock}
                              placeholder={product.units}
                              onChange={validateCant}
                              style={{ width: "40px", marginTop: "5px" }}
                            />
                          </td>
                          <td>
                            < Button className='btn' variant="warning" onClick={()=>updatedCart(product.idProduct)}>Up</Button>
                          </td>
                          <td>
                            <Button className='btn' variant="danger" onClick={()=>removeToCart(product.idProduct)}><RemoveFromCartIcon /></Button>
                          </td>
                          <td>
                            <p>{accounting.formatMoney(`${product.amount}`)}</p>
                          </td>
                        </tr>
                    )
                    })
                  }
                </tbody>
              </table>
            </div>
            { cartDetails.length > 0 && <Button className='btn' variant="danger" onClick={()=>clearCart()} >Clear Cart</Button>}
          </div>
          { cartDetails.length > 0 &&
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
              <div className="text-center cart-actions">
                <Button className="btn btn-success btn-block mb-3" onClick={()=>goToPath('/cart/checkout')}>Proceed to Checkout</Button>
              
              </div>
              <div className="text-center cart-actions">
                <Button className="btn btn-success btn-block mb-1" onClick={()=>goToPath('/store')}>Go Store</Button>
              </div>
            </div>
          </div>
          } 
        </div>
      </div>
    </Container>
  )
}

export default CartPage

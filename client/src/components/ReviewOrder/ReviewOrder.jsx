import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import accounting from 'accounting';
import { useNavigate } from 'react-router-dom'

export default function ReviewOrder() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartDetails = useSelector(state => state.cartDetails)

  const user = useSelector(state => state.userLogin);

  const [ formCheckout , setFormCheckout ] = useState({
      email: user.email,
      phone: user.phone,
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address,
      cp: user.cp,
      city: user.city,
      country: user.country,
  });

  const [ order, setOrder ] = useState({
    id: '',
    amount: 0,
    taxAmount: 0,
    totalAmount: 0
  });

  const goToPath = (goPath) => {
    navigate(goPath);
  };

  const updateTotals = () => {
    let amountO= 0;
    let taxAmountO = 0;
    let totalAmountO = 0;
    for (let i=0; i < cartDetails.length; i++) {
        amountO = amountO + cartDetails[i].amount;
        taxAmountO = taxAmountO + cartDetails[i].taxAmount;
        totalAmountO = totalAmountO + cartDetails[i].totalAmount;
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
                                <th>Subtotal</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            { cartDetails.map(product => {
                                return (
                                    <tr>
                                        <td>
                                            <p className='h5' >{product.name}</p>
                                        </td>
                                        <td className="text-center mob-hide">
                                            <figure className='container-fluid'>
                                                <img src={product.image} width={90} height={90} alt={product.name} />
                                            </figure>
                                        </td>
                                        <td className="mob-hide text-center">
                                            <span>{accounting.formatMoney(`${product.price}`)}</span>
                                        </td>
                                        <td>
                                            <p className='text-center'>{product.units}</p>
                                        </td>
                                        <td>
                                            <p className='text-center'>{accounting.formatMoney(`${product.amount}`)}</p>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div class="col-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                    <label><strong>Billing Address</strong></label>
                                    <hr />
                                    <p>{formCheckout.firstname} {formCheckout.lastname}</p>
                                    <p>{formCheckout.address}</p>
                                    <p>{formCheckout.cp}</p>
                                    <p>{formCheckout.country} - {formCheckout.city}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <h1 className='text-center'>Total Order</h1>
                        <table className="table bordered table-striped">
                            <tbody>
                            <tr>
                                <td colSpan="1" className="text-left"><strong>Total: </strong></td>
                                <td colSpan="1" className="text-right"><p>{accounting.formatMoney(`${order.totalAmount}`)}</p></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="text-center cart-actions">
                            <Button className="btn btn-success btn-block mb-3" onClick={()=>goToPath('/cart/checkout/review/payment')}>Proceed to the Payment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
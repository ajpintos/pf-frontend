import React from 'react';
import { useEffect } from 'react';
import { Link , useNavigate } from "react-router-dom";
import imgpropia from "../../img/logo.png";
import { useSelector , useDispatch } from 'react-redux';
import Cart from '../Cart/Cart.jsx';
import { userLogout , setUser } from '../../Redux/actions/actionsUser.js';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import s from './Title.module.css';
import { add_All_Cart } from '../../Redux/actions/actionsCart';

function Title() {

  const user = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  }

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user');
    const cartLS = localStorage.getItem('cartDetails');
    console.log('cartLS ', cartLS);
    if (userLocalStorage) {
      const userLocalStorageRedux = JSON.parse(userLocalStorage);
      dispatch(setUser(userLocalStorageRedux));
    }
    if (cartLS) {
      let cartCartLS = {};
      let detailsCartLS = [];
      // if (cartLS.cart) {
        console.log('entro a 1');
        const cartLocalStorage = JSON.parse(cartLS);
        cartCartLS = cartLocalStorage.cart;
        detailsCartLS = cartLocalStorage.details;
        // } else {
          //   console.log('entro a 2');
          //   detailsCartLS = JSON.parse(cartLS);
          // }
          console.log(' cart y detail ', cartCartLS, detailsCartLS);
          dispatch(add_All_Cart(cartCartLS, detailsCartLS));
    }
  },[])

  return (
    <div className="row justtify-content-center align-items-center ">
      <div className='col-3'>
        <figure className='justify-content-start'>
          <Link to={'/'}>
            <img src={imgpropia} alt="Biofresh Logo" className='img-fluid' width={150}/>
          </Link>
        </figure>
      </div>
      <div className="col-9 d-flex align-items-center justify-content-end" id={s.buttons}>
        {user.email ? (
          <div className="col-auto">
            <Link to="/myaccount" id={s.link}  className="col-auto title-text">
              🙋‍♂️ {user.firstname}
            </Link>
            <Button variant="outline-danger" className='m-1 title-text' id={s.logout} size="sm" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="col-auto">
            <Link to="/login" id={s.link} className="col-auto title-text">
              🙋‍♂️ Login
            </Link>
          </div>
        )}
        <div className="col-auto">
          <Link to='/favorites' id={s.link} className="col-auto title-text">🧡 Fav</Link>
        </div>
        <div className="col-auto">
          <Link to='/cart' id={s.link} className="col-auto title-text">🛒 Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
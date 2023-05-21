import React from 'react';
import { Link , useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import { userLogout } from '../../Redux/actions/actionsUser.js';
import Cart from '../Cart/Cart.jsx';
import imgpropia from "../../img/logo.png";
import Button from 'react-bootstrap/Button';
import s from './Title.module.css'
import Col from 'react-bootstrap/esm/Col.js';

function Title() {

  const user = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  }


  return (
    <>
      <div className="row justtify-content-center align-items-center">
        <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
          <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0' />
        </figure>
        <Col xs={7}> 
          {user.email
            ?<div>
              <Link to="/myaccount" id={s.link} className="col-5 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-10">
                🙋‍♂️ {user.firstname}
              </Link>
              <Button variant="outline-danger" size="sm" onClick={handleLogout} >Logout</Button>
            </div>
          : <Link to="/login" id={s.link} className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-10">
              🙋‍♂️ Login
            </Link>
          }</Col>
        <Link to='/' id={s.link} className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
        <Link to='/cart' id={s.link} className="col-2 col-sm-1 col-md-1 col-lg-1"><Cart/></Link>
      </div>
    </>
)};

export default Title;
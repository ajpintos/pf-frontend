import React from 'react';
import {Link} from "react-router-dom";
import imgpropia from "../../logo/logo.png";
import s from './Title.module.css'

function Title() {
  return (
    <div className="container-fliud bg-opacity-25">
      <div className="row justtify-content-center align-items-center">
          <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
          <Link to={'/'}><img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 px-3 py-1' /></Link>
          </figure>
          <Link to="/login" id={s.link} className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">🙋‍♂️ MyAcc</Link>
          <Link to='/' id={s.link} className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
          <Link to='/' id={s.link} className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Cart</Link>
      </div>
    </div>
  );
};

export default Title;
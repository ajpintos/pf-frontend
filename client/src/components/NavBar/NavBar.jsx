import React, { useEffect } from "react";
import s from './NavBar.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/actions/actionsCategories";

export default function NavBar () {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.allCategories)
  const products = useSelector(state => state.allProducts)

  return (
    <div className={s.container_settings}>
      <div className={s.navBar}> 
        <Link to='/' className={s.home}>HOME</Link>
        <Link to='/store' className={s.store}>STORE</Link>
        <Link to='/about' className={s.about_us}>ABOUT US</Link>
        <Link to='/contact' className={s.contact_us}>CONTACT US</Link>
      </div>
      <Link to={'/settings'} className={s.settings}>SETTINGS</Link>
    </div>
  )
}
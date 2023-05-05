import React from "react";
import s from './NavBar.module.css';
import { Link } from "react-router-dom";


export default function NavBar () {
    return (
        <div className={s.container_settings}>
            <div className={s.navBar}> 
                <Link to={'/'}><button className={s.home}>HOME</button></Link>
                <Link to={'/categories'}><button className={s.categories}>CATEGORIES</button></Link>
                <Link to={'/about'}><button className={s.about_us}>ABOUT US</button></Link>
                <Link to={'/contact'}><button className={s.contact_us}>CONTACT US</button></Link>
            </div>
            {/* <Link to={'/settings'}><button className={s.settings}>SETTINGS</button></Link> */}
        </div>
    )
}
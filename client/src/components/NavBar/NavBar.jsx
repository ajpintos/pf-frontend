import React, { useEffect } from "react";
import s from './NavBar.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/actions/actionsCategories";

// export default function NavBar () {
//   const dispatch = useDispatch()
//   const categories = useSelector(state => state.allCategories)
//   const products = useSelector(state => state.allProducts)

//   return (
//     <div className={s.container_settings}>
//       <div className={s.navBar}> 
//         <Link to='/' className={s.home}>HOME</Link>
//         <Link to='/store' className={s.store}>STORE</Link>
//         <Link to='/about' className={s.about_us}>ABOUT US</Link>
//         <Link to='/contact' className={s.contact_us}>CONTACT US</Link>
//       </div>
//       <Link to={'/settings'} className={s.settings}>SETTINGS</Link>
//     </div>
//   )
// }

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  const flagNav = true;

  return (
    <section className="container-fluid">

    <Nav activeKey="1" className={s.home} >
      <Nav.Item>
        <Nav.Link eventKey="1"  className={s.home}>
        <Link to='/' className={s.home}>HOME</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" className={s.store}>
        <Link to='/store' className={s.store}>STORE</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" className={s.about_us}>
        <Link to='/about' className={s.about_us}>ABOUT US</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" className={s.contact_us}>
        <Link to='/contact' className={s.contact_us}>CONTACT US</Link>
        </Nav.Link>
      </Nav.Item>
      <div>
      { flagNav && <NavDropdown title="SETTINGS" id="nav-dropdown" className={s.settings}>
        <NavDropdown.Item eventKey="4.1" >Users</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" >Products</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" >Categories</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4" >Notifications</NavDropdown.Item>
      </NavDropdown>}
      </div>
    </Nav>
    </section>
  );
};

export default NavBar;
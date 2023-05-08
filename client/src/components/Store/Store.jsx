import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar";
import { filterByCategories, getCategories } from "../../Redux/actions/actionsCategories.js";
import { getProducts, sortProducts } from "../../Redux/actions/actionsProducts.js";
import imgpropia from "../../logo/logo.png";
import s from "./Store.module.css";
import Card from "../Card/Card.jsx";
import Stack from "react-bootstrap/esm/Stack.js";

export default function Store () {
  const dispatch = useDispatch()
  const allProducts = useSelector(state => state.products)
  const allCategories = useSelector(state => state.allCategories)
  const [order, setOrder] = useState('');
  const [filter, setFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    getProducts()
  },[dispatch])

  useEffect(() => {
    getCategories()
  },[dispatch])

  function handleOrder(e){
    e.preventDefault()
    dispatch(sortProducts(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value)
  }

  function handleFilterByCategories(e){
    e.preventDefault();
    dispatch(filterByCategories(e.target.value))
    setCurrentPage(1);
    setFilter(e.target.value)
  }


  return (
    <div className="container-fluid">

      {/* Cabecera */}
      <header>

        {/* Sección del logo, login, favoritos y carrito */}
        <div className="row justtify-content-center align-items-center">
          <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
            <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0' />
          </figure>
          <Link to="/login" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">🙋‍♂️ MyAcc</Link>
          <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
          <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Cart</Link>
        </div>

        {/* Sección de NavBar y Settings */}

        <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" >
          <NavBar/>
        </Stack>  

      </header>

      <section>
        <h1 className="text-center mt-3" >Store</h1>
      </section>
      <hr />
      {/* Seccion Ordenamiento y Filtrados */}
      <section  className={s.filters_and_orders}>
        <div className={s.orders}>
          <select onChange={e => handleOrder(e)}>
            <option value="All Products">Order By</option>
            <option value="AtoZ">A to Z</option>
            <option value="ZtoA">Z to A</option>
            <option value="Lower">Lower Price</option>
            <option value="Higher">Higher Price</option>
          </select>
        </div>
        <div className={s.filters}>
          <select onChange={e => handleFilterByCategories(e)}>
            <option value="All">All Categories</option>
            {allCategories.map(c => (
              <option value={c.name} key={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      </section>
      {/* Sección Cards */}
      <section className="row">
        {currentProducts.length > 0 && currentProducts.map((product) => (
          <Card 
          key={product.name}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          categories={product.arrayCategories}
          price={product.price}
          stock={product.stock}
          />
          ))}      
      </section>

      {/* Footer */}
      <div className={s.ppp}>
          <h6>{productsPerPage} products per page</h6>
      </div>
      <Footer />
    </div>
  );
};

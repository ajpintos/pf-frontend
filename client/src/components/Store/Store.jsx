import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Title/Title.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Card from "../Card/Card.jsx";
import Footer from '../Footer/Footer.jsx';
import Stack from "react-bootstrap/esm/Stack.js";
import { filterByCategories, getCategories } from "../../Redux/actions/actionsCategories.js";
import { getProducts, sortProducts } from "../../Redux/actions/actionsProducts.js";
import s from "./Store.module.css";
// import CardContainer from "../CardContainer/CardContainer.jsx";

export default function Store () {
  const dispatch = useDispatch()
  const allProducts = useSelector(state => state.products)
  const allCategories = useSelector(state => state.allCategories)
  const [/*order*/, setOrder] = useState('');
  const [filter, setFilter] = useState('')
  const [input, setInput] = useState(1)
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, /*setProductsPerPage*/] = useState(16);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(parseInt(currentPage) + 1);
  }

  const previousPage = () => {
      setInput(parseInt(input) -1);
      setCurrentPage(parseInt(currentPage) -1)
  }
  for (let i = 1; i <=Math.ceil(allProducts/productsPerPage); i++) {
    pageNumbers.push(i)
  }

/*  useEffect(() => {
    getProducts()
      console.log("Todos los productos",getProducts())
  },[dispatch])

  useEffect(() => {
    getCategories()
  },[dispatch])*/

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
        <Title />

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

      {/* Sección Paged */}
      <nav>
        <div className={s.container_paged} >
          <button className={s.prev_paged} disabled={currentPage <= 1} onClick={previousPage}>{'<'}</button>
          <ul className={s.paged}>
              { pageNumbers?.map((i) => (
                <li  key={i} onClick={() => paged(i)}>
                  {i}
                </li>
              ))}
          </ul >
          <button className={s.next_paged} disabled={currentPage >= Math.ceil(allProducts/productsPerPage)} onClick={nextPage}>{'>'}</button>
        </div>
      </nav>

      {/* Footer */}
      <div className={s.ppp}>
          <h6>{productsPerPage} products per page</h6>
      </div>
      <Footer />
    </div>
  );
};

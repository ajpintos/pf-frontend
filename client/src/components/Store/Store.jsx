import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Title/Title.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Card from "../Card/Card.jsx";
import Footer from '../Footer/Footer.jsx';
import Stack from "react-bootstrap/esm/Stack.js";
import { filterByCategories, getCategories } from "../../Redux/actions/actionsCategories.js";
import { getProducts } from "../../Redux/actions/actionsProducts.js";
import s from "./Store.module.css";

export default function Store () {
  const dispatch = useDispatch()
  const allProducts = useSelector(state => state.products)
  const allCategories = useSelector(state => state.allCategories)
  const [order, setOrder] = useState('All Products');
  const [filter, setFilter] = useState('All');
  const [input, setInput] = useState(1);
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

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

  async function handleOrder(e){
    e.preventDefault();
    const productsOrder = await filterByCategories(filter, e.target.value);
    if (productsOrder.hasOwnProperty('error')) {
      alert(productsOrder.error);
    } else {
      dispatch(productsOrder);
      setOrder(e.target.value)
      setCurrentPage(1);
    };
  };

  async function handleFilterByCategories(e){
    e.preventDefault();
    const productsFilter = await filterByCategories(e.target.value, order);
    if (productsFilter.hasOwnProperty('error')) {
      alert(productsFilter.error);
    } else {
      dispatch(productsFilter);
      setFilter(e.target.value);
      setCurrentPage(1);
    };
  };

  return (
    <div className="container-fluid">

      {/* Cabecera */}
      <header>
        <Title />
        <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" >
          <NavBar/>
        </Stack>
      </header>

      <div className="row" >
        {/* Seccion Ordenamiento y Filtrados */}
        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-2" >
          <h1 className="text-center mt-3" >Store</h1>
          <h6 className="text-center mt-3" >{productsPerPage} products per page</h6>
          <section  className="col text-center mt-5" >
            <div className={s.filters}>
              <select onChange={e => handleFilterByCategories(e)}>
                <option value="All">All Categories</option>
                {allCategories.map(c => (
                  <option value={c.id} key={c.name}>{c.name}</option>
                  ))}
              </select>
            </div>
          </section>
          <section className="col text-center mt-5" >  
            <div className={s.orders}>
              <select onChange={e => handleOrder(e)}>
                <option value="All Products">Without Order</option>
                <option value="AtoZ">A to Z</option>
                <option value="ZtoA">Z to A</option>
                <option value="Lower">Lower Price</option>
                <option value="Higher">Higher Price</option>
              </select>
            </div>
          </section>
        </div>

        {/* Sección Cards */}
        <div className="col-sm-9 col-md-9 col-lg-9 col-xl-10">

          {/* Sección Paged */}
          <nav className="row">
            {/* <div className={s.container_paged} > */}
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

          <section className="row">
            {currentProducts.length > 0 && currentProducts.map((product) => (
              <Card
              key={product.name}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              stock={product.stock}
              priceFlag={true}
              />
              ))}
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { filterByCategories, getCategories } from "../../Redux/actions/actionsCategories.js";
import { useParams } from "react-router-dom";
import SetPages from "./SetPages.jsx";
import { getProducts } from "../../Redux/actions/actionsProducts.js";

export default function Store () {

  const dispatch = useDispatch();
  const params = useParams();
  const allProducts = useSelector(state => state.products);
  const allCategories = useSelector(state => state.allCategories);
  const [order, setOrder] = useState('All Products');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
    // setCurrentPage((prevCurrentPage)=>{
    //   console.log(prevCurrentPage);
    //   return prevCurrentPage;
    // })
  }

  const nextPage = (e) => {
    e.preventDefault();
    setCurrentPage(parseInt(currentPage) + 1);
  }

  const previousPage = (e) => {
      e.preventDefault();
      setCurrentPage(parseInt(currentPage) -1)
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
      alert('There are no products for this category');
    } else {
      dispatch(productsFilter);
      setFilter(e.target.value);
      setCurrentPage(1);
    };
  };

  async function loadingData () {
    const all_Products = await getProducts();
    dispatch(all_Products);
    const all_Categories = await getCategories();
    dispatch(all_Categories);
    let flagCategory = true;
    setOrder('All Products');
    if (params.hasOwnProperty('id')) {
      const idCategory = params.id;
      const productsFilter = await filterByCategories(idCategory, order);
      if (productsFilter.hasOwnProperty('error')) {
        alert('There are no products for this category');
        flagCategory = false;
        alert('Return to all Categories')
      } else {
        dispatch(productsFilter);
        setFilter(idCategory);
      }
    } 
    if (!flagCategory) {
      const productsFilter = await filterByCategories('All', order);
      dispatch(productsFilter);
      setFilter('All');
    };
    setCurrentPage(1);
  };

  useEffect(()=>{
    loadingData();
  },[]);

  return (
    <div className="container-fluid">

      <div className="row" >

        {/* Seccion Ordenamiento y Filtrados */}
        <div className="col-md-3 col-lg-3 col-xl-2" >
          <h1 className="text-center mt-3" >Store</h1>
          <div className="col">
            <section  className="col text-center mt-5" >
              <div className="col-8 offset-2 col-md-12 offset-md-0 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
                <p className="text-center h6" >Filter by Category</p>
                <select className="form-select" size="5" aria-label="Filter by Category" onChange={handleFilterByCategories}>
                  { filter === "All" ? <option className="bg-secondary text-white" value="All">All Categories</option> : <option value="All">All Categories</option> }
                  {allCategories?.map(c => 
                    { const rowCategory = filter === c.id ? <option className="bg-secondary text-white overflow-hidden" value={c.id} key={c.name}>{c.name}</option> : <option value={c.id} key={c.name}>{c.name}</option> 
                    return (
                      rowCategory
                      )}
                      )}
                </select>
              </div>
            </section>
            <section className="col text-center mt-5" >  
              <div className="col-8 offset-2 col-md-12 offset-md-0 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
                <p className="text-center h6" >Orde by</p>
                <select className="form-select" size="5" aria-label="Order by" onChange={handleOrder}>
                  { order === "All Products" ? <option className="bg-secondary text-white" value="All Products">Without Order</option> : <option value="All Products">Without Order</option> }
                  { order === "AtoZ" ? <option className="bg-secondary text-white" value="AtoZ">A to Z</option> : <option value="AtoZ">A to Z</option> }
                  { order === "ZtoA" ? <option className="bg-secondary text-white" value="ZtoA">Z to A</option> : <option value="ZtoA">Z to A</option> }
                  { order === "Lower" ? <option className="bg-secondary text-white" value="Lower">Lower Price</option> : <option value="Lower">Lower Price</option> }
                  { order === "Higher" ? <option className="bg-secondary text-white" value="Higher">Higher Price</option> : <option value="Higher">Higher Price</option> }
                </select>
              </div>
            </section>
          </div>
          <h6 className="text-center mt-5 mb-3" >Showing up to {productsPerPage} products per page</h6>
        </div>

        {/* Sección Cards */}
        <div className="col-md-9 col-lg-9 col-xl-10 mt-2">

          {/* Sección Paged */}

          {
            Math.ceil(allProducts.length / productsPerPage) > 1 && <SetPages 
            productsPerPage = {productsPerPage}
            allProductsLength = {allProducts.length}
            paged = {paged}
            previousPage = {previousPage}
            nextPage = {nextPage}
            currentPage = {currentPage}
            />
          }


          <section className="row">
            {currentProducts.length > 0 && currentProducts.map((product) => (
              <Card
              key={product.name}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              priceFlag={true}
              />
              ))}
          </section>

        </div>
      </div>
    </div>
  );
};

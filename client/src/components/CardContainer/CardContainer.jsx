import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByName } from "../../Redux/actions/actionsProducts";
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/esm/Button.js";
import SetPages from "../Store/SetPages.jsx";

function CardContainer({ whereIAm, hereIAm }) {

  const dispatch = useDispatch();

  const show_Products = useSelector(state => state.showProducts);
  const showProducts = show_Products.filter(prod => prod.status && prod.stock > 0);
  const nameProducts = useSelector(state => state.nameProducts);
  const flagProducts = useSelector(state => state.flagProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const products = showProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
    hereIAm({
      place: '',
      order: '',
      filter: '',
      name: nameProducts,
      currentPage: pageNumber,
    });
  }

  const nextPage = (e) => {
    e.preventDefault();
    setCurrentPage(parseInt(currentPage) + 1);
    hereIAm({
      place: '',
      order: '',
      filter: '',
      name: nameProducts,
      currentPage: parseInt(currentPage) + 1,
    });
  }

  const previousPage = (e) => {
      e.preventDefault();
      setCurrentPage(parseInt(currentPage) - 1)
      hereIAm({
        place: '',
        order: '',
        filter: '',
        name: nameProducts,
        currentPage: parseInt(currentPage) - 1,
      });
  }

  const changeProducts = async () => {
    const all_products = await getProductsByName('',false);
    dispatch(all_products);
    paged(1)
    hereIAm({
      place: '',
      order: '',
      filter: '',
      name: '',
      currentPage: 1,
    });
  }

  const callApi = async () => {
    const flag_Products = flagProducts;
    console.log('flagProducts en callAppi ', flag_Products);
    const retWhereIAm = whereIAm;
    console.log('entro a cardContainer con ',retWhereIAm);
    if (whereIAm.place !== 'detail') {
      if (flag_Products) {
        console.log('entro a productsByName con flagProducts',flag_Products)
        const name_Products = nameProducts;
        console.log('name_Products ', name_Products);
        const products_ByName = await getProductsByName(name_Products, true);
        console.log('products_ByName ', products_ByName);
        dispatch(products_ByName);
        paged(1);
        hereIAm({
          place: '',
          order: '',
          filter: '',
          name: nameProducts,
          currentPage: 1,
        });
        console.log('en cardContainer flag ', whereIAm);
      } else {
        const all_products = await getProductsByName('',false);
        if (all_products !== null) {
          dispatch(all_products);
          paged(1);
          hereIAm({
            place: '',
            order: '',
            filter: '',
            name: '',
            currentPage: 1,
          });
          console.log('en cardContainer con no flag ', whereIAm);
        };
      };
    } else {
      if (flag_Products) {
        console.log('entro a productsByName con flagProducts ',flag_Products)
        console.log('name_Products ', retWhereIAm.name);
        const products_ByName = await getProductsByName(retWhereIAm.name, true);
        console.log('products_ByName ', products_ByName);
        dispatch(products_ByName);
        paged(retWhereIAm.currentPage)
        hereIAm({
          place: '',
          order: '',
          filter: '',
          name: retWhereIAm.name,
          currentPage: retWhereIAm.currentPage,
        });
      } else {
        const all_products = await getProductsByName('',false);
        if (all_products !== null) {
          dispatch(all_products);
          paged(retWhereIAm.currentPage);
          hereIAm({
            place: '',
            order: '',
            filter: '',
            name: '',
            currentPage: retWhereIAm.currentPage,
          });
        };
      };
    };
  };

  useEffect(() => {
    console.log('nameProducts en useEffect ',nameProducts);
    callApi();
  }, []);

  return (
    <Container fluid >
      <section className="container-fluid d-flex justify-content-center" >
        { flagProducts && <Button variant="success" className="col-3 mb-3" onClick={changeProducts}>All Products</Button>}
      </section>
         {/* Sección Paged */}

         {
            Math.ceil(showProducts.length / productsPerPage) > 1 && <SetPages 
            productsPerPage = {productsPerPage}
            allProductsLength = {showProducts.length}
            paged = {paged}
            previousPage = {previousPage}
            nextPage = {nextPage}
            currentPage = {currentPage}
            />
          }
      <section className="row">
        {showProducts.length > 0 && products.map((product, index) => (
          <Card 
          key={index}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          tax={product.tax}
          stock={product.stock}
          priceFlag={false}
          />
          ))}
      </section>
    </Container>
  );
}

export default CardContainer;
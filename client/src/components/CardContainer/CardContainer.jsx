import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByName } from "../../Redux/actions/actionsProducts";
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/esm/Button.js";

function CardContainer() {

  const dispatch = useDispatch();

  const allProducts = useSelector(state => state.allProducts);
  const showProducts = useSelector(state => state.showProducts);
  const nameProducts = useSelector(state => state.nameProducts);
  const flagProducts = useSelector(state => state.flagProducts);

  const products = showProducts;

  const changeProducts = async () => {
    const all_products = await getProducts();
    if (all_products !== null) dispatch(all_products);
  }

  const callApi = async () => {
    if (flagProducts) {
      const name_Products = nameProducts;
      const products_ByName = await getProductsByName(name_Products);
      if (products_ByName !== null) {
        dispatch(products_ByName);
      };
    } else {
      const all_products = await getProducts();
      if (all_products !== null) {
        dispatch(all_products);
      };
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Container fluid >
      <section className="container-fluid d-flex justify-content-center" >
        { flagProducts && <Button variant="success" className="col-3 mb-3" onClick={changeProducts}>All Products</Button>}
      </section>
      <section className="row">
        {products?.map((product,index) => (
          <Card 
          key={index}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          stock={product.stock}
          priceFlag={false}
          />
          ))}
      </section>
    </Container>
  );
}

export default CardContainer;
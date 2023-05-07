import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByName } from "../../Redux/actions/actionsProducts";
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/esm/Button.js";

function CardContainer({ flagChange, changeFlag }) {

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
    if (flagChange) {
      const name_Products = nameProducts;
      const products_ByName = await getProductsByName(name_Products);
      if (products_ByName !== null) {
        dispatch(products_ByName);
        changeFlag(true);
      };
    } else {
      const all_products = await getProducts();
      if (all_products !== null) {
        dispatch(all_products);
        changeFlag(false);
      };
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Container fluid >
      <section className="row mt-3 mb-3">
        <h2 className="col-xs-12 text-center"  >FEATURED PRODUCTS</h2>
        { flagProducts && <Button className="col-sx-1" onClick={changeProducts}>All Products</Button>}
      </section>
      <section className="row">
        {products.length > 0 && products.map((product) => (
          <Card 
          key={product.name}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          stock={product.stock}
          />
          ))}
      </section>
    </Container>
  );
}

export default CardContainer;

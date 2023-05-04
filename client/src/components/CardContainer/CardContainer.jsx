import React from "react";
import { useEffect, useState } from "react";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card.jsx";
import axios from "axios";

function CardContainer() {
  const [products, setProducts] = useState([]);

  const callApi = async () => {
    const api = await axios("/products");
    const apiData = api.data;
    setProducts(apiData);
    return products;
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className={styles.container_productos}>
      {products.map((product) => (
        
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
    </div>
  );
}

export default CardContainer;

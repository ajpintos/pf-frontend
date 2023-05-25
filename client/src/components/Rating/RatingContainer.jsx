import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import Container from 'react-bootstrap/Container'
import { getProductsRating } from "../../Redux/actions/actionsRating.js";

function RatingContainer () {

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);
  const showProducts = useSelector(state => state.ratingProducts);
  

  const loadinRating = () => {
    dispatch(getProductsRating(allProducts));
  };

  useEffect(()=>{
    loadinRating();
  },[]);

  return (
    <Container fluid >

      <section className="row">
        {showProducts.length > 0 && showProducts.map((product, index) => (
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

export default RatingContainer;
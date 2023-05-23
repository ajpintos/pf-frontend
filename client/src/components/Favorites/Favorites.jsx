import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Card from '../Card/Card.jsx'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  const favorite = favorites.map((e) => {
    return e;
  });

  console.log(favorite);

  return (
    <Container fluid my-3 pb-3 mx-5>
   <Row className="justify-content-md-center">
           <Col md="auto">
    <h2>Favorites</h2></Col>
    </Row>
      {/* <Link to="/">
        <button>Home</button>
      </Link> */}
      
        <section className="row">
          {favorite?.map((product,index) => {
            return (
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
            
            );
          })}
           <Row className="justify-content-md-center">
           <Col md="auto">
          {favorites.length <1 ?  <h4 my-3 pb-5 style={{ color: "orangered",
        margin:'auto',}}>No favorites have been selected, go back to Home.</h4>:''}
       </Col>
        </Row>

        
      </section>
    </Container>
  );
};

export default Favorites;

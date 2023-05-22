import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Card from '../Card/Card.jsx'

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  const favorite = favorites.map((e) => {
    return e;
  });

  console.log(favorite);

  return (
    <Container fluid >
   
    
      <Link to="/">
        <button>Home</button>
      </Link>
      {/* <div className="border border-danger border-3 ">
        <div
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            margin: "5px",
          }}
        > */}
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
              // <div className="border border-success border-2">
              //   <div>
              //     <div>NOMBRE:{e.name}</div>
              //     <div>DESCRIPTION:{e.description}</div>
              //     <img src={e.image} alt="" width="20%" height="20px" />
              //     <div>PRECIO:{e.price}</div>
              //     <div>DISPONIBLES:{e.stock}</div>
              //   </div>
              // </div>
            );
          })}
        {/* </div> */}
      {/* </div> */}
      </section>
    </Container>
  );
};

export default Favorites;

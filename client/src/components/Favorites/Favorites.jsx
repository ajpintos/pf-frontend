import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "../Card/Card.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useEffect, useState } from "react";
import { getFavoritesDB } from "../../Redux/actions/actionsFavorites.js";

const Favorites = ({ email }) => {
 /*  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoritesDB(email));
  }, []);

  const datos = useSelector((state) => state?.favorites); */
  /*   const user = useSelector((state) => state?.userLogin);
  const [datos, setDatos] = useState();
  const llamado = async () => {
    const prueba = await axios.get(`/favorites/${user?.email}`);
    setDatos(prueba?.data);
  }; */
  /*  useEffect(() => {
    llamado();
  }, []); */

  /*   const favoritos = useSelector((state) => state.favorites);
  console.log(favoritos);  */

  /*   const favorites = useSelector((state) => state.favorites);

  const favorite = favorites.map((e) => {
    return e;
  });

  console.log(favorite); */

  return (
    <Container fluid my-3 pb-3 mx-5>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Favorites</h2>
        </Col>
      </Row>

      <div>
        {datos?.map((e, i) => {
          if (e?.active) {
            return (
              <>
                <Card
                  key={i}
                  id={e?.product.id}
                  name={e?.product.name}
                  image={e?.product.image}
                  description={e?.product.description}
                  price={e?.product.price}
                  stock={e?.product.stock}
                />
              </>
            );
          }
        })}
      </div>

      {/*   <section className="row">
        {
        e?.product?.map((product, index) => {
          return (
            <Card
              key={index}
              id={product?.id}
              name={product?.name}
              image={product?.image}
              description={product?.description}
              price={product?.price}
              stock={product.stock}
        
            />
          );
        })}
        <Row className="justify-content-md-center">
          <Col md="auto">
            {datos?.length < 1 ? (
              <h4 my-3 pb-5 style={{ color: "orangered", margin: "auto" }}>
                No favorites have been selected, go back to Home.
              </h4>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </section> */}
    </Container>
  );
};

export default Favorites;

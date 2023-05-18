import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";


function Card({ id, name, image, description, price, stock, arrayCategories }) {

  // NO TOCAR MERCADOLIBRE FUNCIONANDO

  const handlerMercadoPagoLink = async () => {
    axios.post('/payments', {id , name , image , description , price})
      .then((res) => window.location.href = res.data.response.body.init_point)
      .catch((error) => console.log(error));
  }

  return (
    <div className="col-xs-8 offset-xs-2 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-1 mb-3">
      {name ? (
        <div className="card">
          <div className="card-body">
            <Link to={`/detail/${id}`}>
              <img src={image} className="card-img-top img-fluid" alt={name} />
            </Link>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className="row">
              <Button variant="success" className="col-6 offset-3" onClick={handlerMercadoPagoLink}>Add to Cart</Button>
            </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default Card;

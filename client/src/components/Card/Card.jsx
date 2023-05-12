import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


function Card({ id, name, image, description, price, stock, priceFlag }) {
  return (
    <div className="col-8 offset-2 py-1 px-3 col-sm-6 offset-sm-0 py-sm-1 px-sm-3 col-md-6 offset-md-0 py-md-1 px-md-3 col-lg-4 offset-lg-0 py-lg-1 px-lg-3 col-xl-3 offset-xl-0 py-xl-1 px-xl-3 mt-1 mb-3 text-center">
      {name ? (
        <div className="card">
          <div className="card-body">
            <Link to={`/detail/${id}`}>
              <img src={image} className="card-img-top img-fluid" alt={name} />
            </Link>
            <h5 className="card-title">{name}</h5>
            <p className="card-text mb-0">{description}</p>
            { priceFlag && 
              <div className="col mt-0">
                  <p className="col-6 offset-3 text-center" >Stock <strong>{stock}</strong></p>
                  <p className="col-6 offset-3 bg-warning bg-opacity-50" ><strong>$ {price}</strong></p>
              </div>
              }
            <div className="row">
              <Button variant="success" className="col-6 offset-3">+ Cart</Button>
            </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default Card;

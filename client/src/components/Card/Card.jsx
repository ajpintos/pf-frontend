import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


function Card({ id, name, image, description, price, stock, priceFlag }) {
  return (
    <div className="col-10 offset-1 py-1 px-3 col-sm-6 offset-sm-0 py-sm-1 px-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 py-lg-1 px-lg-3 col-xl-4 offset-xl-0 mt-1 mb-3 py-xl-1 px-xl-3 text-center">
      {name ? (
        <div className="card">
          <div className="card-body">
            <Link to={`/detail/${id}`}>
              <img src={image} className="card-img-top img-fluid" alt={name} />
            </Link>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            { priceFlag && 
              <div className="row">
                  <p className="col-3" >Price</p>
                  <p className="col-3" >{price}</p> 
                  <p className="col-3" >Stock</p>
                  <p className="col-3" >{stock}</p> 
              </div>
              }
            <div className="row">
              <Button variant="success" className="col-6 offset-3">Add to Cart</Button>
            </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default Card;

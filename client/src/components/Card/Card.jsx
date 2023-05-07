import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


function Card({ id, name, image, description, price, stock }) {
  return (
    <div className="col-xs-8 offset-xs-2 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-1 mb-3">
      {name ? (
        <div className="card">
          <div className="card-body">
            <img src={image} className="card-img-top img-fluid" alt={name} />
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className="row">
              <Button variant="success" className="col-xs-3 offset-xs-1 col-sm-5 offset-sm-1 col-md-6 offset-md-0 col-lg-7 offset-lg-0">Add to Cart</Button>
              <Link to={`/detail/${id}`} className='col-xs-2 offset-xs-5 col-sm-3 offset-sm-2 col-md-4 offset-md-2 col-lg-4 offset-lg-1 rounded bg-warning text-light text-center p-2'>Info</Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Card;

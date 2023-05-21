import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { AddToCartIcon } from "../Icons/Icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addFavorites, deleteFavorites,} from "../../Redux/actions/actionsFavorites";

function Card({ id, name, image, description, price, priceFlag, stock }) {
  //! Función de Mercadopago
  const handlerMercadoPagoLink = async () => {
    axios.post('/payments', {id , name , image , description , price})
        .then((res) => window.location.href = res.data.response.body.init_point)
        .catch((error) => console.log(error));
  }
  const dispatch = useDispatch();

  const [isFav, setIsFav] = React.useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(name));
    } else {
      setIsFav(true);
      dispatch(addFavorites({ id, name, image, description, price, stock }));
    }
  };
  const state = useSelector((state) => state.favorites);
  useEffect(() => {
    state.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [state, id]);
  return (
    <div className="col-8 offset-2 py-1 px-3 col-sm-6 offset-sm-0 py-sm-1 px-sm-3 col-md-6 offset-md-0 py-md-1 px-md-3 col-lg-4 offset-lg-0 py-lg-1 px-lg-3 col-xl-3 offset-xl-0 py-xl-1 px-xl-3 mt-1 mb-3 text-center">
      {name ? (
        <div className="card">
          <div className="card-body">
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
            <Link to={`/detail/${id}`}>
              <img src={image} className="card-img-top img-fluid" alt={name} />
            </Link>
            <h5 className="card-title">{name}</h5>
            <p className="card-text mb-0">{description}</p>
            { priceFlag &&
              <div className="col mt-1">
                  <p className="col-6 offset-3" ><strong>$ {price}</strong></p>
              </div>
              }
            <div className="row">
              <Button variant="btn btn-success mt-2" className="col-6 offset-3" onClick={handlerMercadoPagoLink}><AddToCartIcon/></Button>
            </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default Card;

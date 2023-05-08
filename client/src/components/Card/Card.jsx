import React, { useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Card({ id, name, image, description, price, stock }) {


  const [isFav, setIsFav] = React.useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.favorites);

  useEffect(() => {
    state.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [state, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(id));
    } else {
      setIsFav(true);
      dispatch(addFavorites({ id, name, image, description, price, stock }));
    }
  };

  return (
    <div className={styles.products}>
      {name ? (
        <div>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          <Link to={`/detail/${id}`}>
            <img src={image} alt={name} className={styles.image_product} />
          </Link>
          <h4 className={styles.name}>{name}</h4>
          <h5 className={styles.stock}>STOCK: {stock}</h5>
          <h5 className={styles.price}>PRICE: ${price}</h5>
          <h6 className={styles.description}>{description}</h6>
          <button className={styles.button_cart}>Add to Cart</button>
        </div>
      ) : null}
    </div>
  );
}
{
  /* <div className={s.productos}>
            <img
              src={p.image}
              alt="En desarrollo"
              className={s.image_product}
            />
            <h4 className={s.name}>{p.name}</h4>
            <h6 className={s.description}>{p.description}</h6>
            <h5 className={s.price}>$:{p.price}</h5>
            <button className={s.button_cart}>Add to Cart</button>
</div> */
}
export default Card;

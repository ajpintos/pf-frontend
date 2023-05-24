import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFavoritesDB,addFavorites,deleteFavorites } from "../../Redux/actions/actionsFavorites";

const Detail = ({ email }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [cant, setCant] = React.useState(1);

  const getProductForId = async () => {
    try {
      const Data = await axios(`/products/${id}`);
      const char = Data.data;
      if (char) {
        setProduct(char);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  React.useEffect(() => {
    getProductForId();
    dispatch(getFavoritesDB(email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  const validacion = (e) => {
    setCant(e.target.value);
  };

  const userLogueado = useSelector((state) => state?.userLogin);

  const datos = useSelector((state) => state?.favorites);


  const [isFav, setIsFav] = React.useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(
        deleteFavorites({ userEmail: userLogueado.email, productId: id })
      );
    } else {
      setIsFav(true);
      dispatch(addFavorites({ userEmail: userLogueado.email, productId: id }));
    }
  };

  useEffect(() => {
    datos?.forEach((fav) => {
      if (fav.productId === id) {
        if (fav.active) {
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      }
    });
  }, [datos, id]);



  return (
    <div>
      <div className="row  text-center ">
        <div className="container ">
          <h1>DETAIL</h1>
          <div className="row">
            <div className="col">
              <img
                src={product?.image}
                alt={product?.name}
                width="320"
                height="320"
              />
            </div>

            <div className="col">
              <h1>{product.name}</h1>

              <h2>${product.price}</h2>
              <p> {product.description}</p>
              <div>
                <strong>Available:</strong>
                <strong> {product.stock} units</strong>
              </div>

              <div>
                <input
                  type="number"
                  value={cant}
                  min={1}
                  max={product.stock}
                  onChange={validacion}
                  style={{ width: "60px", marginTop: "10px" }}
                />

                <button
                  style={{
                    borderRadius: "10px",
                    fontSize: "13px",
                    textAlign: "center",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  {" "}
                  Add to Cart 🛒
                </button>
              </div>
              <br />
              <div>
                <div>
                {userLogueado.email ? (
                isFav ? (
                  <button
                    /* className={st.btnFav} */
                    onClick={handleFavorite}
                    style={{ border: 0 }}
                  >
                    ❤️
                  </button>
                ) : (
                  <button /* className={st.btnFav}  */onClick={handleFavorite}>
                    🤍
                  </button>
                )
              ) : (
                ""
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Detail;

import { useSelector } from "react-redux";
import style from "./favorites.module.css";
import { Link } from "react-router-dom";

const Favorito = () => {
  const favorite = useSelector((state) => state.favorites);

  const j = favorite.map((e) => {
    return e;
  });
  console.log(j);

  return (
    <div className="container-fluid border border-info border-3">
      {j.map((e) => {
        return (
          <div>
            <div className="">
              <Link to="/">
                <button>Volver</button>
              </Link>
              <div className="">NOMBRE:{e.name}</div>
              <div>DESCRIPTION:{e.description}</div>
              <img src={e.image} alt="" width="100%" height="100px" />
              <div>PRECIO:{e.price}</div>
              <div>DISPONIBLES:{e.stock}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorito;

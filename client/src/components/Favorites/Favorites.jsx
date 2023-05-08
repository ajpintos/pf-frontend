import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorite = useSelector((state) => state.favorites);

  const j = favorite.map((e) => {
    return e;
  });

  return (
    <div className="container-fluid border border-info border-3">
      <h1>Favorites en Desarrollo</h1>
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

export default Favorites;

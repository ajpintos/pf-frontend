import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  const favorite = favorites.map((e) => {
    return e;
  });

  console.log(favorite);

  return (
    <div className="container-fluid text-center border border-info border-3 vh-100 vw-100">
      <h1>Favorites en Desarrollo</h1>
      <Link to="/">
        <button>Volver</button>
      </Link>
      <div className="border border-danger border-3 ">
        <div
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            margin: "5px",
          }}
        >
          {favorite.map((e) => {
            return (
              <div className="border border-success border-2">
                <div>
                  <div>NOMBRE:{e.name}</div>
                  <div>DESCRIPTION:{e.description}</div>
                  <img src={e.image} alt="" width="20%" height="20px" />
                  <div>PRECIO:{e.price}</div>
                  <div>DISPONIBLES:{e.stock}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

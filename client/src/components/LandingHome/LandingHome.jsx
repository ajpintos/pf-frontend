import {useDispatch } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../CardContainer/CardContainer.jsx";
import SearchBar from "../SearchBar/SearchBar";
import { getProducts } from "../../Redux/actions/actionsProducts.js";
import { getCategories } from "../../Redux/actions/actionsCategories.js";
import s from "./Landing_home.module.css";

const Landing_home = () => {

  const dispatch = useDispatch();

  const loadingData = async () => {
    const all_Products = await getProducts();
    dispatch(all_Products);
    const all_Categories = await getCategories();
    dispatch(all_Categories);
  };

  useEffect(() => {
      loadingData();
  }, []);

  // // const user = {name: "Javier"}
  // const user = useSelector(state => state.userLogin);

  // //! Autenticación con Google
  // const clientID = "932914293926-uo3dpst96jr8s51di1mmbhdh3j2gie6a.apps.googleusercontent.com";
  // useEffect(() => {
  //     const start = () => {
  //         gapi.auth2.init({
  //             clientId: clientID,
  //         })
  //     }
  //     gapi.load("client:auth2", start);
  // },[])

  // const onSuccess = (response) => {
  //     console.log(response)
  // }

  // const onFailure = (response) => {
  //     console.log("Something went wrong", response)
  // }
  // //! --------------------------------------

  return (
    <div className="container-fluid">
      
      {/* Sección Hero */}
      <div className={s.hero}>
        <h1 className={s.text}>The Best and Healthiest you find here</h1>
      </div>

      {/* Sección Cards */}
      <SearchBar/>
      <h2 className="col-xs-12 text-center mt-3"  >FEATURED PRODUCTS</h2>
      <CardContainer />

    </div>
  );
};

export default Landing_home;



//    <header>
//            {/* Sección del logo, login, favoritos y carrito */}
//            <div className="row justtify-content-center align-items-center">
//              {/*<Title />*/}
//              <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
//                  <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0'/>
//              </figure>
//
//              {user.email ?
//                <Link to="/myaccount" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
//                  🙋‍♂️ {user.firstname}
//                </Link>
//                :
//                <Link to="/login" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
//                  🙋‍♂️ Login
//                </Link>
//              }
//              <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
//              <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Cart</Link>
//              <GoogleLogin
//                  clientId={clientID}
//                  onSuccess={onSuccess}
//                  onFailure={onFailure}
//                  cookiePolicy={"single_host_policy"}
//              />
//            </div>
//
//              <NavBar/>
//
//          </header>

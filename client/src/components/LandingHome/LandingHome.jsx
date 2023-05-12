import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Footer from "../Footer/Footer.jsx";
import Title from "../Title/Title.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { getProducts } from "../../Redux/actions/actionsProducts.js";
import { getCategories } from "../../Redux/actions/actionsCategories.js";
import Stack from "react-bootstrap/esm/Stack.js";
import s from "./Landing_home.module.css";


const Landing_home = () => {

  const dispatch = useDispatch();
  const testUser = useSelector(state => state.userLogin);

  const loadingData = async () => {
    const all_Products = await getProducts();
    dispatch(all_Products);
    const all_Categories = await getCategories();
    dispatch(all_Categories);
  };

 
  useEffect(() => {
        loadingData();
  }, []);


  return (
        <div className="container-fluid">
          {/* {console.log(testUser)} */}
            {/* Cabecera */}
          <header>
              {/* Sección del logo, login, favoritos y carrito */}
              <Title />
              {/* Sección de NavBar y Settings */}
              <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" >
              <NavBar/>
              </Stack>  
              {/* Sección Hero */}
            <div className={s.hero}>
                <h1 className={s.text}>The Best and Healthiest you find here</h1>
            </div>
          </header>
      {/* Sección Cards */}
      <SearchBar/>
      <h2 className="col-xs-12 text-center mt-3"  >FEATURED PRODUCTS</h2>
      {/* <CardContainer flagChange={flagChange} changeFlag={changeFlag} />  */}
      <CardContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing_home;

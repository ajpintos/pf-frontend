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

  return (
    <div className="container-fluid">
      
      {/* Sección Hero */}
      <div className={s.hero}>
        <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1"><strong>The Best and Healthiest you find here</strong></h1>
      </div>

      {/* Sección Cards */}
      <SearchBar/>
      <h2 className="col-xs-12 text-center mt-3"  >FEATURED PRODUCTS</h2>
      <CardContainer />

    </div>
  );
};

export default Landing_home;

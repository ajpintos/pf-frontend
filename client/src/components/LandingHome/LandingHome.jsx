import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar";
import Settings from "../Settings/Settings";
import SearchBar from "../SearchBar/SearchBar";
import {getProducts} from "../../Redux/actions/actionsProducts";
import {getCategories} from "../../Redux/actions/actionsCategories";
import imgpropia from "../../logo/logo.png";
import s from "./Landing_home.module.css";
import Stack from "react-bootstrap/esm/Stack.js";
import { useSelector } from "react-redux";

const Landing_home = () => {

    const dispatch = useDispatch();

    const [flagChange, setFlagChange] = useState(false);

    const changeFlag = (flag) => {
        setFlagChange(flag);
    }

    const loadingData = async () => {
        const all_Products = await getProducts();
        dispatch(all_Products);
        const all_Categories = await getCategories();
        dispatch(all_Categories);
    };

    useEffect(() => {
        loadingData();
    }, []);

    // const user = {name: "Javier"}
    const user = useSelector(state => state.userLogin);

    return (
        <div className="container-fluid">
            {console.log(user)}
            {/* Cabecera */}
            <header>
                {/* Sección del logo, login, favoritos y carrito */}
                <div className="row justtify-content-center align-items-center">
                    <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
                        <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0'/>
                    </figure>

                    {user.email ? 
                        <Link to="/myaccount" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
                          🙋‍♂️ {user.firstname}
                        </Link> 
                        :
                        <Link to="/login" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
                          🙋‍♂️ Login
                        </Link>
                    }
                    <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
                    <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Cart</Link>
                </div>

                {/* Sección de NavBar y Settings */}

                <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3">
                    <NavBar/>
                    <Settings/>
                </Stack>


                {/* Sección Hero */}
                <div className={s.hero}>
                    <h1 className={s.text}>The Best and Healthiest you find here</h1>
                </div>
            </header>

            {/* Sección Cards */}
            <SearchBar/>
            <CardContainer flagChange={flagChange} changeFlag={changeFlag}/>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Landing_home;

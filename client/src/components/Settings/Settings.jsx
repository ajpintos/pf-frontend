import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Stack from "react-bootstrap/esm/Stack";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import UsersSettings from "../UsersSettings/UsersSettings";
import ProductsSettings from "../ProductsSettings/ProductsSettings";

function Settings() {

    const navigate = useNavigate();
    const [show, setShow]=useState({
        users:false,
        products:false
    })
const handlerShowU=()=>{
    setShow({users : true,
             products: false   })
}
const handlerShowP=()=>{
    setShow({users : false,
        products: true   })
}
    return (
        <div className="container-fluid">
            <Title />
            <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" >
                <NavBar/>
            </Stack>  
            <div className="text-center mt-5 mb-5">
                <button className="mt-5 mb-3" onClick={() => navigate("/")}>Back to Home</button>
                <h1 className="mb-5">Settings  in progres...</h1>
                <button onClick={handlerShowU}>Users</button>
                <button onClick={handlerShowP}>Products</button>
               {show.users ? <UsersSettings/>: null} 
               {show.products ? <ProductsSettings/>:  null}
                

            </div>
            <Footer />
        </div>
    )
}

export default Settings;
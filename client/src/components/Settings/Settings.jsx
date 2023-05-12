import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Stack from "react-bootstrap/esm/Stack";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

function Settings() {

    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <Title />
            {/* <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" > */}
                <NavBar/>
            {/* </Stack>   */}
            <div className="text-center mt-5 mb-5">
                <button className="mt-5 mb-3" onClick={() => navigate("/")}>Back to Home</button>
                <h1 className="mb-5">Working in progres...</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Settings;
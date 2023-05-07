import React from "react";
import imgTools from "../../assets/tools.svg";
// import { useNavigate } from "react-router-dom";

function Settings() {

    // const navigate = useNavigate();

    return (
        <figure className="col-1">
            <img src={imgTools} alt="Settings" className="img-fluid bg-light border" />
        </figure>
    )
}

export default Settings;
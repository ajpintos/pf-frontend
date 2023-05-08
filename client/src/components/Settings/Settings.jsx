import React from "react";
import imgTools from "../../assets/tools.svg";
import { useNavigate } from "react-router-dom";

function Settings() {

    // return (
    //     <figure className="col-1">
    //         <img src={imgTools} alt="Settings" className="img-fluid bg-light border"/>
    //     </figure>
    // )

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/")}>Back to Home</button>
            <h1>Working in progres...</h1>
        </div>
    )
}

export default Settings;
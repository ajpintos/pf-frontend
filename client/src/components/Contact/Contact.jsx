import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/")}>Back to Home</button>
            <h1>Working in progres...</h1>
        </div>
    )
}

export default Contact;
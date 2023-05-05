import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/")}>Back to Home</button>
            <h1>Working in progres...</h1>
            <div class="container">
        {/* <NavBar /> */}
        en ontact
        <div class="border  container-fluid">
        <div class="row">
          <div class="col">
            <h2>Contáctanos</h2>
          </div>
          <div class="col">
          </div>
          </div>
          </div>

            </div>


        </div>
    )
}

export default Contact;
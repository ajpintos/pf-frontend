import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    return (
        <div class="container">
            <button onClick={() => navigate("/")}>Back to Home</button>
            
           
        {/* <NavBar /> */}
        
        <div class="border  container-fluid">
        <div class="row">
          <div class="col">
            <h2>Dejanos tu mensaje</h2>
            <div>Nombres y Apellidos 
                <input type="text" name='name'></input>
            </div>
            <div>Email
                <input type="text" name='email'></input>
            </div>
            <div>Celular
                <input type="text" name='phone'></input>
            </div> 
            <div>Mensaje
                <input type="text" name='mensaje'></input>
            </div>
           <button> Enviar</button>
          </div>

          <div class="col">
                <h2>Contáctanos</h2>
          </div>
          </div>
          </div>
          <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      ></link>
            </div>


       
    )
}

export default Contact;
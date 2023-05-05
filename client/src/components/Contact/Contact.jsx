import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import { useState } from "react";
import validate from "./validate.js";

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
    });
    setErrors(
      validate({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div class='container'>
      <button onClick={() => navigate("/")}>Back to Home</button>

      {/* <NavBar /> */}

      <div >
        <div class="row  g-3 ">
          <div class="col-md-6 col-xm-12 g-5 p-5 border" >
            <h2>Dejanos tu mensaje</h2>
          
            <div >
              <label htmlFor="name">Nombres y Apellidos</label>
              <input
                class="form-control"
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                aria-label="Nombre"
              />
              <div>                
                <span className={styles.error}>
                  {errors.name ? errors.name : null}
                </span>
              </div>
            </div>


   
            <div class="row  g-3">
              <div class="col-md-6 col-xm-12 p-3">
             
                <input
                  type="text"
                  name="email"
                  class="form-control  "
                  rows="3"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <span className={styles.error}>
                  {errors.email ? errors.email : null}
                </span>
            </div>
            <div class="col-md-6 col-xm-12 p-3">
              
              <input
                type="text"
                name="phone"
                class="form-control"
                value={form.phone}
                maxlength="20"
                onChange={handleChange}
                placeholder="Celular" aria-label="Celular"
              />
              <div>
                <span className={styles.error}>
                  {errors.phone ? errors.phone : null}
                </span>
              </div>
            </div>
            </div>
            <div >
              Mensaje
              <textarea
                class="form-control"
                rows="3"
                onChange={handleChange}
                name="message"
              ></textarea>
               <div class='row p-3'>
                <span className={styles.error}>
                  {errors.message ? errors.message : null}
                </span>
              </div>
            </div>
            {/* <div class='row p-3'> */}
            <button class='btn btn-primary' > Enviar</button>
            {/* </div> */}
          </div>

          <div class="col-md-6 col-xm-12 g-3" >
            <div class="row border border-danger">
             
              <h3>BioFresh</h3>
              <div>
                Si tienes alguna duda sobre algún producto. quieres contarnos
                sobre un evento o simplemente quieres escribirnos, déianos tu
                mensaje aquí!
              </div>

              <h2>Contáctanos</h2>
              <div class="row  g-3">
              <h3 class="col border border-primary">Telefono : </h3>
              <div class="col border border-primary"> 3007476099 </div>
             </div>
              <h3 class="col border border-secondary">Direccion</h3>
              <div class="col border border-danger">Carrera 33 # ejemplo</div>
              <h3 class="row">Email</h3>
              <div class="row">Biofresh@gmail.com</div>
            </div>
          </div>
          <br />
          <h1></h1>
        </div>
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      ></link>
    </div>
  );
}

export default Contact;

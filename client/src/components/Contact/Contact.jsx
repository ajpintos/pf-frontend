import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import { useState } from "react";
import validate from "./validate";

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
    <div className={styles.container_Principal}>
      <button onClick={() => navigate("/")}>Back to Home</button>

      {/* <NavBar /> */}

      <div class="border  container-fluid">
        <div class="row">
          <div class="col">
            <h2>Dejanos tu mensaje</h2>
            <div>
              Nombres y Apellidos
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              Email
              <input type="text" name="email" value={form.email}></input>
              <span className={styles.error}>
                {errors.email ? errors.email : null}
              </span>
            </div>
            <div>
              Celular
              <input type="text" name="phone" value={form.phone}></input>
              <span className={styles.error}>
                {errors.phone ? errors.phone : null}
              </span>
            </div>
            <div>
              Mensaje
              <input type="text" name="mensaje" value={form.message}></input>
              <span className={styles.error}>
                {errors.message ? errors.message : null}
              </span>
            </div>
            <button> Enviar</button>
          </div>

          <div class="col">
            <h3>BioFresh</h3>
            <div>
              Si tienes alguna duda sobre algún producto. quieres contarnos
              sobre un evento o simplemente quieres escribirnos, déianos tu
              mensaje aquí!
            </div>

            <h2>Contáctanos</h2>

            <h3>Telefono : </h3>
            <div>3007476099</div>
            <h3>Direccion</h3>
            <div>Carrera 33 # ejemplo</div>
            <h3>Email</h3>
            <div>Biofresh@gmail.com</div>
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

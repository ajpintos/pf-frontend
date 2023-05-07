import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import phone from "./img/phone.png";
import direccion from "./img/direccion.png";
import email from "./img/email.jpg";
import { useState } from "react";
import validate from "./validate.js";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import NavBar from "../NavBar/NavBar";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Contact() {
  const navigate = useNavigate();
  const Dom = document.getElementById("formToSend");
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
  const [successMessage, setSuccessMessage]=useState('')
  const [errorMessage, setErrorMessage]=useState('')

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
    setSuccessMessage('');
    setErrorMessage('');
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if(!errors.name&&form.name&&!errors.message&&form.message&&!errors.email&&form.email&&!errors.phone&&form.phone){
      
        const serviceID = "service_e5hd1wt";
        const templateID = "contact_form";
        const key_public = "gEu_FBDo_Q0lvhmwA";
        emailjs.sendForm(serviceID, templateID, Dom, key_public).then(
          (result) => {
            console.log(result.text);            
            setSuccessMessage('Mensaje enviado con exito');
            setForm({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            setErrorMessage('Error al enviar el mensaje');
          }
        );
        }
        else{
          setErrorMessage('Debe completar los campos correctamente');
          return}
  };
  return (
    <div className="container">
      <NavBar />
      <button onClick={() => navigate("/")}>Back to Home</button>

      <div>
        <div className="row   ">
          <div className="col-md-6 col-xm-12 border">
            <h2>Dejanos tu mensaje</h2>
            <Form onSubmit={sendEmail} id="formToSend">
              <Form.Group className="mb-3">
                
                <FloatingLabel
                    controlId="floatingInputName"
                    label="Nombres y Apellidos"
                    // className="mb-3"
                  >
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="name"                     
                      value={form.name}
                      onChange={handleChange}
                      aria-label="Nombre"
                      placeholder="Nombres y Apellidos"
                    />
                </FloatingLabel>
                <div>
                  <span className={styles.error}>
                    {errors.name ? errors.name : null}
                  </span>
                </div>
              </Form.Group>

              <div className="row">
                <Form.Group className="col-md-6 col-xm-12 mb-3 ">
                <FloatingLabel
                    controlId="floatingInputEmail"
                    label="Email"
                    className="mb-3"
                  >
                  <Form.Control
                    type="text"
                    name="email"
                    className="form-control  "
                    rows="3"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                   </FloatingLabel>
                   <div>
                  <span className={styles.error}>
                    {errors.email ? errors.email : null}
                  </span></div>
                </Form.Group>
                <Form.Group className="col-md-6 col-xm-12 mb-3">
                <FloatingLabel
                    controlId="floatingInputPhone"
                    label="Phone"
                    className="mb-3"
                  >
                  <Form.Control
                    type="text"
                    name="phone"
                    className="form-control"
                    value={form.phone}
                    maxLength="20"
                    onChange={handleChange}
                    placeholder="Celular"
                    aria-label="Celular"
                  />
                   </FloatingLabel>
                  <div>
                    <span className={styles.error}>
                      {errors.phone ? errors.phone : null}
                    </span>
                    
                  </div>
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
               {/* <Form.Label htmlFor="message">Mensaje</Form.Label>  */}
               <FloatingLabel
                  controlId="floatingTextarea"
                  label="Mensaje"
                  className="mb-3"
                >
                <Form.Control
                  as="textarea"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  name="message"
                  value={form.message}
                  placeholder="Mensaje"
                />
               </FloatingLabel>
                <div className="row p-1">
                  <span className={styles.error}>
                    {errors.message ? errors.message : null}
                  </span>
                </div>
              </Form.Group>
              {/* <div className='row p-3'> */}
              <button className="btn btn-primary" type="submit">                
                Enviar
              </button>
              {/* </div> */}
              <p className={styles.error}>{errorMessage}</p>
              <p className={styles.success}>{successMessage}</p>
            </Form>
          </div>

          <div className="col ">
            <div className="container col  mt-5">
              <div className="row ">
                <h3 className="col-md-6 text-start ">BioFresh</h3>
                <div className="col-m-4  text-start small  mt-3">
                  Si tienes alguna duda sobre algún producto. quieres contarnos
                  sobre un evento o simplemente quieres escribirnos, déianos tu
                  mensaje aquí!
                </div>

                <div className="row text-white">" "</div>
                <h4 className="col-md-4 mt-3">Contáctanos</h4>
                <br />
                <div className="d-flex flex-wrap   mt-3 ">
                  <h6 className="col  text-start ">
                    <div className="container-fluid">
                      <div className="row ">
                        <img
                          src={phone}
                          alt=""
                          height="60px"
                          className="col-4  "
                        />
                        <label className="col-7 p-2" height="60px ">
                          Telefono 3007476099
                        </label>
                      </div>
                    </div>
                  </h6>

                  <h6 className="col-md-6  ">
                    <div className="container-fluid">
                      <div className="row ">
                        <img
                          className="col-4 "
                          src={direccion}
                          alt=""
                          height="60px"
                        />
                        <label className="col  text-start ">
                          Direccion carrera 23-42-123
                        </label>
                      </div>
                    </div>
                  </h6>

                  <h6 className="col-8   mt-4">
                    <div className="container-fluid">
                      <div className="row">
                        <img
                          className="col-3 "
                          src={email}
                          alt=""
                          height="60px"
                        />
                        <label className="col-7 text-start   mt-2  ">
                          Email:  contact.biofresh.shop@gmail.com
                        </label>
                      </div>
                    </div>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;

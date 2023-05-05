import React, {useState} from 'react';
import styles from './RegisterPage.module.css';
import Footer from '../Footer/Footer.jsx';
import axios from "axios";
import registerValidate from "./validate/registerValidate.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar from "../NavBar/NavBar.jsx";

function RegisterPage(props) {

    //! Estado local para guardar los datos del formulario
    const [form, setForm] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        address: "",
        cp: "",
        city: "",
        country: "",
        phone: "",
    })

    //! Estado local para guardar los errores de validación del formulario
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        address: "",
        cp: "",
        city: "",
        country: "",
        phone: "",
    })

    const submitHandler = (event) => {
        event.preventDefault()
        const response = axios.post("/users", form)
        console.log("Este es el contenido del form", form)
            .then(res => alert("User added successfully!")
                .catch(err => alert(err)))
    }


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        //! Elimina id delay de la validación
        setForm({...form, [property]: value});
        setErrors(registerValidate({...form, [property]: value}));
    }

    return (<>
            <NavBar/>
            <div className={styles.formContainer}>
                <Form onSubmit={submitHandler}>
                    <h2>Register</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="email" name="email"
                                          value={form.email}
                                          onChange={changeHandler}/>
                        </Form.Group>
                        <br/>

                        <Form.Group as={Col} controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" id="password" name="password"
                                          value={form.password}
                                          onChange={changeHandler}/>
                        </Form.Group>
                    </Row>
                    <br/>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstname" placeholder="First Name" id="firstname" name="firstname"
                                          value={form.firstname} onChange={changeHandler}/>
                        </Form.Group>
                        <br/>
                        <Form.Group as={Col} className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastname" placeholder="Last Name" id="lastname" name="lastname"
                                          value={form.lastname}
                                          onChange={changeHandler}/>
                        </Form.Group>
                    </Row>
                    <br/>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" placeholder="Address" id="address" name="address"
                                      value={form.address}
                                      onChange={changeHandler}/>
                    </Form.Group>
                    <br/>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formZiCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="cp" placeholder="Zip Code" id="cp" name="cp" value={form.cp}
                                          onChange={changeHandler}/>
                        </Form.Group>
                        <br/>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="city" placeholder="City" id="city" name="city" value={form.city}
                                          onChange={changeHandler}/>
                        </Form.Group>
                    </Row>

                    <br/>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="country" placeholder="Country" id="country" name="country"
                                          value={form.country}
                                          onChange={changeHandler}/>
                        </Form.Group>
                        <br/>
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="Phone" id="phone" name="phone"
                                          value={form.phone}
                                          onChange={changeHandler}/>

                        </Form.Group>
                    </Row>
                    <br/>
                    <Button variant="success" type="submit">
                        Register
                    </Button>
                </Form>
            </div>

            <Footer/>
        </>
    );
}

export default RegisterPage;

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';
import Title from '../Title/Title.jsx';
import axios from "axios";
import registerValidate from "./validate/registerValidate.js";
import styles from './RegisterPage.module.css';

//CSS REACT-BOOSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar from "../NavBar/NavBar.jsx";
import Stack from 'react-bootstrap/esm/Stack';
//------------------------------------------------------

function RegisterPage() {

    const navigate = useNavigate();

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
        axios.post("/users", form)
            .then(res => {
                alert("User added successfully!")
                navigate("/login")
            })
            .catch(err => alert("Error: Check all camps and try again"))
    }


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        //! Elimina id delay de la validación
        setForm({...form, [property]: value});
        setErrors(registerValidate({...form, [property]: value}));
    }

    return (
        <div className="container-fluid">
            <Title />
            <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" >
                <NavBar/>
            </Stack>
            <div className={styles.formContainer}>
                <Form onSubmit={submitHandler}>
                    <h2>Register</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                id="email" 
                                name="email"
                                value={form.email}
                                onChange={changeHandler}
                            />
                            <p style={{color:"red"}}>{errors.email}</p>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter Password" id="password" name="password"
                                value={form.password}
                                onChange={changeHandler}
                            />
                            <div style={{color:"red"}}>{errors.password}</div>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="firstname" 
                                placeholder="First Name" 
                                id="firstname" 
                                name="firstname"
                                value={form.firstname} 
                                onChange={changeHandler}
                            />
                            <p style={{color:"red"}}>{errors.firstname}</p>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="lastname" 
                                placeholder="Last Name" 
                                id="lastname" 
                                name="lastname"
                                value={form.lastname}
                                onChange={changeHandler}
                            />
                            <p style={{color:"red"}}>{errors.lastname}</p>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="address" 
                            placeholder="Address" 
                            id="address" 
                            name="address"
                            value={form.address}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formZiCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control 
                                type="cp"
                                placeholder="Zip Code" 
                                id="cp" 
                                name="cp" 
                                value={form.cp}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                type="city" 
                                placeholder="City" 
                                id="city" 
                                name="city" 
                                value={form.city}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control 
                                type="country" 
                                placeholder="Country" 
                                id="country" 
                                name="country"
                                value={form.country}
                                onChange={changeHandler}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="phone" 
                                placeholder="Phone" 
                                id="phone" 
                                name="phone"
                                value={form.phone}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="success" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default RegisterPage;

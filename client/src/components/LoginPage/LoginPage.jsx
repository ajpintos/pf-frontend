import React, {useState} from 'react';
import styles from './LoginPage.module.css';
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import loginValidate from "./validate/loginValidate.js";

function LoginPage(){

//! Estado local para guardar los datos del formulario
const [form, setForm] = useState({
    email: "",
    password: "",
})

/*//! Estado local para guardar los errores de validación del formulario
const [errors, setErrors] = useState({
    email: "",
    password: ""
})*/

const submitHandler = (event) => {
    event.preventDefault()
    const response = axios.get("/users", form)
        .then(res => alert("User logged successfully!")
            .catch(err => alert(err)))
}


const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    //! Elimina id delay de la validación
    setForm({...form, [property]: value});
    // setErrors(loginValidate({...form, [property]: value}));
}

return (<>
        <NavBar/>
        <div className={styles.formContainer}>
            <Form onSubmit={submitHandler}>
                <h2>Login</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlIdEmail="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="email" name="email"
                                      value={form.email}
                                      onChange={changeHandler}/>
                    </Form.Group>
                    <br/>

                    <Form.Group as={Col} controlIdPassword="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" id="password" name="password"
                                      value={form.password}
                                      onChange={changeHandler}/>
                    </Form.Group>
                </Row>
                <br/>
                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </div>

        <Footer/>
    </>)
}
export default LoginPage;

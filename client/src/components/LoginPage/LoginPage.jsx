import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import axios from "axios";

import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/actions/actionsUserLogin.js';

function LoginPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //! Estado local para guardar los datos del formulario
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const submitHandler = async (event) => {
        event.preventDefault();
        dispatch(userLogin(form.email , form.password ));
        alert("login successfully")
        navigate("/");
        //login funcionando
    }

    const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    //! Elimina id delay de la validación
    setForm({...form, [property]: value});
}

useEffect(() => {

},[])

return (<>
        <NavBar/>
        <div className={styles.formContainer}>
            <Form onSubmit={submitHandler}>
                <h2>Login</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlidemail="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" id="email" name="email"
                            value={form.email}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group as={Col} controlidpassword="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            id="password" 
                            name="password"
                            value={form.password}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                </Row>
                <br/>
                <Button variant="success" type="submit">Login</Button>
            </Form>
            <Link to={"/register"}>Register Now</Link>
        </div>

        <Footer/>
    </>)
}
export default LoginPage;

import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/actions/actionsUserLogin.js';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';
import styles from './LoginPage.module.css';

//! Autenticación con Google

import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";


const clientID = "932914293926-uo3dpst96jr8s51di1mmbhdh3j2gie6a.apps.googleusercontent.com";
   
const onSuccess = (response) => {
    console.log(response)
}

const onFailure = (response) => {
    console.log("Something went wrong", response)
}
// useEffect(() => {
//     const start = () => {
//         gapi.auth2.init({
//             clientId: clientID,
//         })
//     }
//     gapi.load("client:auth2", start);
// },[])

//! --------------------------------------
// CSS REACT-BOOSTRAP
import NavBar from "../NavBar/NavBar.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Title from '../Title/Title';
import Stack from 'react-bootstrap/esm/Stack';

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
        const status = await dispatch(userLogin(form.email , form.password ))
        if (status.hasOwnProperty('error')) alert("Incorrect email or password");
        else {
            alert("login successfully");
            navigate("/");
        }
    }

    const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
        setForm({...form, [property]: value});
    };

return (
    <div className="container-fluid">
        <Title />
        <Stack direction="horizontal" className="d-flex flex-row justify-content-between bg-success pt-3 pb-3" >
            <NavBar/>
        </Stack>
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
            <Row className="mb-3">
                <Link to={"/register"}>Register Now</Link>
            </Row>
            <Row className="mb-3">
                <GoogleLogin
                    clientId={clientID}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_policy"}
                />
            </Row>
        </div> 
        <Footer/>
    </div>
)};

export default LoginPage;
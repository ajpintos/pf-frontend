import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emailForgotPassword } from "../../../Redux/actions/actionsUser.js";
import styles from "./FormEmail.module.css"
import validateFormEmail from "./validate/validateFormEmail.js";

// REACT-BOOSTRAP

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import registerValidate from "../../RegisterPage/validate/registerValidate.js";

const FormEmail = () => {

    const [ email , setEmail ] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        email: ""
    })

    const [errors, setErrors] = useState({
        email: ""
    })

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        const property = e.target.name;
        const value = e.target.value;
        setForm({...form, [property]: value});
        setErrors(validateFormEmail({...form, [property]: value}));
    }

    const handlerSubmitEmail = (e) => {
        e.preventDefault();
        dispatch(emailForgotPassword(email));
        navigate('/forgotpassword/changepassword');
    }


    return (
        <div className="container-fluid">
            <div className={styles.formContainer}>
                <Form onSubmit={handlerSubmitEmail} id="formToSend">
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </Form.Group>
                    <p style={{color: "red"}}>{errors.email}</p>
                        <Button variant="success" type="submit" size='sm'>Submit</Button>
                </Form> 
            </div>
        </div>
    )
}

export default FormEmail;
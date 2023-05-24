import React from "react";
import { useState } from "react";
import styles from "./FormEmail.module.css"

// REACT-BOOSTRAP

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const FormEmail = () => {

    const [ email , setEmail ] = useState("")

    const handleChangeEmail = (e) => setEmail(e.target.value);

    const handlerSubmitEmail = (e) => {
        e.preventDefault();
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
                        <Button variant="success" type="submit" size='sm'>Submit</Button>
                </Form> 
            </div>
        </div>
    )
}

export default FormEmail;
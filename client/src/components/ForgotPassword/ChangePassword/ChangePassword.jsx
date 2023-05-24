import React from "react";
import { useState } from "react";
import styles from "./ChangePassword.module.css";

// REACT-BOOSTRAP

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ChangePassword = () => {

    const [formForgotPassword , setFormForgotPassword ] = useState({
        token: "",
        newPassword: "",
        repeatNewPassword:""
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setFormForgotPassword({...formForgotPassword, [property]: value});
    }

    const handlerSubmitForgotPassword = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container-fluid">
            <div className={styles.formContainer}>
                <Form onSubmit={handlerSubmitForgotPassword} id="formToSend">
                    <Form.Group as={Col} controlId="formToken"> 
                        <Form.Label>Token</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Token"
                            id="token"
                            name="token"
                            value={formForgotPassword.token}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} controlId="formNewPassword"> 
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter new password"
                                id="newPassword"
                                name="newPassword"
                                value={formForgotPassword.newPassword}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formRepeatNewPassword"> 
                            <Form.Label>Repeat new password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Repeat new password"
                                id="repeatNewPassword"
                                name="repeatNewPassword"
                                value={formForgotPassword.repeatNewPassword}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="success" type="submit" size='lg'>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword;
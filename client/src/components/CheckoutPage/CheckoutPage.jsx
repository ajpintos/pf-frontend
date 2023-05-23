import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import validate from './validate.js';
import emailjs from "@emailjs/browser";
import styles from './CheckoutPage.module.css';

//CSS REACT-BOOSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/esm/Stack';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function RegisterPage() {

    const navigate = useNavigate();

    //! Estado local para guardar los datos del formulario
    const [form, setForm] = useState({
        email: "",
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
                alert("User added successfully!");
                const Dom = document.getElementById("formToSend");
                const serviceID = "service_e5hd1wt";
                const templateID ="template_59dtr2y";// "contact_form";
                const key_public = "gEu_FBDo_Q0lvhmwA";
                emailjs.sendForm(serviceID, templateID, Dom, key_public) .then(
                    (result) => {
                      console.log(result.text);
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );
                navigate("/login");
            })
            .catch(err => alert("Error: Check all camps and try again"))
    }


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        //! Elimina id delay de la validación
        setForm({...form, [property]: value});
        setErrors(validate({...form, [property]: value}));
    }

    const goToStore = () => {
        navigate('/store');
    };

    return (
        <div className="container-fluid">
            <div className='container'>
                <div className='row my-2'>
                    <h1 className='text-center'>Checkout Page</h1>
                </div>
            <div>
                <Form onSubmit={submitHandler} id="formToSend" className='d-flex gap-4'>
                    <div className='col-lg-8'>
                        <div className='card mb-3'>
                            <div className="card-header">
                                <h2 className="legend card-title">Contact</h2>
                            </div>
                            <Row className="mb-1 px-2">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>E-mail *</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={changeHandler}
                                    />
                                    <p style={{color: "red"}}>{errors.email}</p>
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
                        </div>
                        <div className="card mb-3 pb-3">
                            <div className="card-header">
                                <h2 className="legend card-title">Billing Address</h2>
                            </div>
                        <Row className="px-2">
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control
                                    type="firstname"
                                    placeholder="First Name"
                                    id="firstname"
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={changeHandler}
                                />
                                <p style={{color: "red"}}>{errors.firstname}</p>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control
                                    type="lastname"
                                    placeholder="Last Name"
                                    id="lastname"
                                    name="lastname"
                                    value={form.lastname}
                                    onChange={changeHandler}
                                />
                                <p style={{color: "red"}}>{errors.lastname}</p>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1 px-2">
                            <Form.Group as={Col} controlId="formAddress">
                                <Form.Label>Address *</Form.Label>
                                <Form.Control
                                    type="address"
                                    placeholder="Address"
                                    id="address"
                                    name="address"
                                    value={form.address}
                                    onChange={changeHandler}
                                    />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label>City *</Form.Label>
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
                        <Row className="mb-1 px-2">
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
                            <Form.Group as={Col} controlId="formCountry">
                                <Form.Label>Country *</Form.Label>
                                <Form.Control
                                    type="country"
                                    placeholder="Country"
                                    id="country"
                                    name="country"
                                    value={form.country}
                                    onChange={changeHandler}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1 px-2">
                            <Form.Group as={Col} controlId="formRegion">
                                <Form.Label>Region *</Form.Label>
                                <Form.Control
                                    type="region"
                                    placeholder="Region"
                                    id="region"
                                    name="region"
                                    value={form.region}
                                    onChange={changeHandler}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formMunicipality">
                                <Form.Label>Municipality *</Form.Label>
                                <Form.Control
                                    type="municipality"
                                    placeholder="Municipality"
                                    id="municipality"
                                    name="municipality"
                                    value={form.municipality}
                                    onChange={changeHandler}/>
                            </Form.Group>
                        </Row>
                        </div>
                    </div>
                    <div className=' col-lg-4'>
                        <div id="payments" className="card mb-3">
                            <div className="card-header">
                                <h2 className="legend card-title">Payment Options</h2>
                            </div>
                            <div id="payments_options" className="card-body">
                            <ul>
                                <li>
                                    <input type="radio" id="order_payment_method_27792" className="radiobox"/>
                                    <label htmlFor="order_payment_method_27792"><span>Transferencia bancaria</span></label>
                                </li>
                                <li>
                                    {/* <input type="radio" id="order_payment_method_30906" className="radiobox" checked="checked"/> */}
                                    <input type="radio" id="order_payment_method_30906" className="radiobox" defaultChecked/>
                                    <label for="order_payment_method_30906"><span>Mercado Pago</span></label>
                                    <div>
                                        You will be redirected to Mercado Pago to make a secure payment.
                                    </div>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <Button variant="success" className='mb-2' type="submit">
                                Review Order
                            </Button>
                            <Button variant='success' className='mb-2' type='' onClick={goToStore}>
                                ← Continue Shopping
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            </div>
        </div>
    );
}

export default RegisterPage;
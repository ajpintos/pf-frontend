import React, {useState} from 'react';
import styles from './RegisterPage.module.css';
import Footer from '../Footer/Footer.jsx';
import axios from "axios";
import validate from "./validate/validate.js";

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
        console.log("Este es el contenido del form",form)
            .then(res => alert("User added successfully!")
                .catch(err => alert(err)))
    }


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        //! Elimina id delay de la validación
        setForm({...form, [property]: value});
        setErrors(validate({...form, [property]: value}));
    }

    return (<>
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.box}>
                <h2>Register</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" value={form.email}
                       onChange={changeHandler}/>
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" value={form.password}
                       onChange={changeHandler}/>
                <br/>
                <label htmlFor="firstname">First Name</label>
                <input type="firstname" id="firstname" name="firstname" placeholder="First Name"
                       value={form.firstname} onChange={changeHandler}/>
                <br/>
                <label htmlFor="lastname">Last Name</label>
                <input type="lastname" id="lastname" name="lastname" placeholder="Last Name" value={form.lastname}
                       onChange={changeHandler}/>
                <br/>
                <label htmlFor="address">Address</label>
                <input type="address" id="address" name="address" placeholder="Address" value={form.address}
                       onChange={changeHandler}/>
                <br/>
                <label htmlFor="cp">Zip Code</label>
                <input type="cp" id="cp" name="cp" placeholder="Zip Code" value={form.cp} onChange={changeHandler}/>
                <br/>
                <label htmlFor="city">City</label>
                <input type="city" id="city" name="city" placeholder="City" value={form.city} onChange={changeHandler}/>
                <br/>
                <label htmlFor="country">Country</label>
                <input type="country" id="country" name="country" placeholder="Country" value={form.country}
                       onChange={changeHandler}/>
                <br/>
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" placeholder="Phone" value={form.phone}
                       onChange={changeHandler}/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
        <Footer/>
    </>);
}

export default RegisterPage;

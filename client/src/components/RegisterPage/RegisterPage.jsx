import React from 'react';
import styles from './RegisterPage.module.css';
import Footer from '../Footer/Footer.jsx';

function RegisterPage(props) {
    return (<>
        <div className={styles.container}>
            <form className={styles.box}>
                <h2>Register</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email"/>
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password"/>
                <br/>
                <label htmlFor="first_name">First Name</label>
                <input type="first_name" id="first_name" name="first_name" placeholder="First Name"/>
                <br/>
                <label htmlFor="last_name">Last Name</label>
                <input type="last_name" id="last_name" name="last_name" placeholder="Last Name"/>
                <br/>
                <label htmlFor="address">Address</label>
                <input type="address" id="address" name="address" placeholder="Address"/>
                <br/>
                <label htmlFor="cp">Zip Code</label>
                <input type="cp" id="cp" name="cp" placeholder="Zip Code"/>
                <br/>
                <label htmlFor="city">City</label>
                <input type="city" id="city" name="city" placeholder="City"/>
                <br/>
                <label htmlFor="country">Country</label>
                <input type="country" id="country" name="country" placeholder="Country"/>
                <br/>
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" placeholder="Phone"/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
        <Footer/>
    </>);
}

export default RegisterPage;

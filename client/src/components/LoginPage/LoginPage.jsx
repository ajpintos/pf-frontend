import React from 'react';
import styles from './LoginPage.module.css';
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar";

function LoginPage(props) {
    return (<>
        <NavBar/>
        <h1 className={styles.title}>Login Page</h1>
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>Login</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                </form>
            </div>
            <div className={styles.box}>
                <h2>Register</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
        </div>
        <Footer/>
    </>);

}

export default LoginPage;

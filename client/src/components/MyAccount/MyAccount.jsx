import React from 'react';
import { useSelector } from 'react-redux';


const MyAccount = () => {

    const user = useSelector(state => state.userLogin);

    return (
        <div>
            <h1>My Account</h1>
            <h3>{`Welcome ${user.firstname}`}</h3>
            <h4>Lastname: {user.lastname}</h4>
            <h4>Email: {user.email}</h4>
        </div>
    );
};

export default MyAccount;
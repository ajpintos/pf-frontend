import React from 'react';
import { useSelector } from 'react-redux';

const user = useSelector(state => state.user)

const MyAccount = () => {
    return (
        <div>
            <h1>My Account</h1>
            <h3>{`Welcome ${user.firstname}`}</h3>
        </div>
    );
};

export default MyAccount;
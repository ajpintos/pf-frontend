import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const MyAccount = () => {

    const navigate = useNavigate();
    const user = useSelector(state => state.userLogin);

    useEffect(() => {
        !user.email && navigate('/');
    }, [user]);

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
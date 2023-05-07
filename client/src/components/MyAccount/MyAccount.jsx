import React from 'react';

const user = {name: "Javier"}
const MyAccount = () => {
    return (
        <div>
            <h1>My Account</h1>
            <h3>{`Welcome ${user.name}`}</h3>
        </div>
    );
};

export default MyAccount;
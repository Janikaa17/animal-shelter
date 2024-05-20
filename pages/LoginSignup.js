import React from 'react';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';

const LoginSignup = () => {
    return (
        <main className="login-signup-page">
            <Login />
            <Signup />
        </main>
    );
};

export default LoginSignup;

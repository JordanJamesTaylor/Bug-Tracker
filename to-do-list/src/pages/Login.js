import React, { Fragment } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function Login() {
    return (
        <Fragment>
            <h1>LOGIN PAGE</h1>
            <SignIn />
            <SignUp />
        </Fragment>
    );
};
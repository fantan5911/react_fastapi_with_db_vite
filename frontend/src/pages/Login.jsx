import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({debug, user, setUser}) => {

    return (
        <div>
            <LoginForm debug={debug} user={user} setUser={setUser}/>
        </div>
    );
};

export default Login;
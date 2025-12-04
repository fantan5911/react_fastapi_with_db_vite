import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = ({debug, user, setUser}) => {
    return (
        <div>
            <RegisterForm debug={debug} user={user} setUser={setUser}/>
        </div>
    );
};

export default Register;
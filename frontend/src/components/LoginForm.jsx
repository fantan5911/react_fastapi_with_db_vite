import axios from 'axios';
import React from 'react';

const LoginForm = ({debug, user, setUser}) => {

    async function Login() {
        if (user.email != '' && user.password != '') {
            const response = await axios.post("http://localhost:4200/api/users/login", {
                email: user.email,
                password: user.password
            });
            if (debug == true) 
                console.log(response.data);
        }
    }
    // async function Register() {
    //     if (user.email != '' && user.password != '') {
    //         const response = await axios.response
    //     }
    // }

    return (
        <div>
                <h1 style={{color: 'white', fontSize: '20px'}}>Страница входа</h1>
                <input
                 type="text" 
                 placeholder="введите email" 
                 value={user.email} 
                 onChange={e => setUser({...user, email: e.target.value})}
                 required={true}
                />
                <input
                 type="text" 
                 placeholder="введите пароль" 
                 value={user.password} 
                 onChange={e => setUser({...user, password: e.target.value})}
                 required={true}
                />
                <button onClick={Login}>Вход</button> 
                {/* <button onClick={Register}>Регистрация</button> */}
        </div>
    );
};

export default LoginForm;
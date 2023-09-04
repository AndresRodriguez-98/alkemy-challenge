import React from 'react';
import axios from 'axios';

const Login = () => {

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (email === '' || password === '') {
            console.log('los campos no pueden estar vacios');
            return;
        }

        if (email !== '' && !validateEmail(email)) {
            console.log('Debes escribir una dirección de correo válida');
            return;
        }

        if (email !== 'reloo.cod@gmail.com' || password !== 'react') {
            console.log('Credenciales inválidas');
            return;
        }

        axios.post()
    }

    return (
        <>
            <h2>Ingresá tus datos para acceder:</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electrónico:</span> <br />
                    <input type='text' name='email' placeholder='Ingresá tu mail' />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span> <br />
                    <input type='password' name='password' placeholder='Ingresá tu contraseña' />
                </label>
                <br />
                <button type='submit'>Ingresar</button>
            </form>
        </>
    )
}

export default Login
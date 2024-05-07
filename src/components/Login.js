import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, redirect } from 'react-router-dom';
import { Header } from './Header';


const Login = () => {

    const navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (email === '' || password === '') {
            swAlert(<h2>Los campos no pueden estar vacios</h2>);
            return;
        }

        if (email !== '' && !validateEmail(email)) {
            swAlert(<h2>Debes escribir una dirección de correo válida</h2>);
            return;
        }

        if (email !== 'reloo.cod@gmail.com' || password !== 'react') {
            swAlert(<h2>Credenciales inválidas</h2>);
            return;
        }

        axios
            // envia el requerimiento via POST a la api
            .post('https://challenge-alkemy.campus.org', { email, password })
            // Esto devuelve una promesa, por lo tanto despues, por programacion funcional le concatenamos otra funcion propia de la promesa llamada then, la cual se llama solo si recibe la respuesta, sino directamente va a un catch() que agarra el error y logra hacer algo con ese error.
            .then(async res => {
                swAlert(<h2>Ingresaste correctamente!</h2>)
                const tokenRecibido = await res.data.token;
                // el setItem te permite setear en la propiedad token, el token recibido de la API, cuando efectivamente se recibió la información
                // LocalStorage solamente almacena strings. Si tenemos objetos literales o arrays necesitamos hacerle un stringify primero.
                localStorage.setItem('token', tokenRecibido);
                navigate('/listado');
            });
    }

    let token = localStorage.getItem('token')

    return (
        <>
            {token && <redirect to='/listado' />}

            <Header />

            <div className='row'>
                <div className='col-6 offset-3'>
                    <h2>Ingresá tus datos para acceder:</h2>
                    <form onSubmit={submitHandler}>
                        <label className='form-label d-block mt-2'>
                            <span>Correo electrónico:</span> <br />
                            <input className='form-control' type='text' name='email' placeholder='Ingresá tu mail' />
                        </label>
                        <br />
                        <label className='form-label d-block mt-2'>
                            <span>Contraseña:</span> <br />
                            <input className='form-control' type='password' name='password' placeholder='Ingresá tu contraseña' />
                        </label>
                        <button className='btn btn-success mt-2' type='submit'>Ingresar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
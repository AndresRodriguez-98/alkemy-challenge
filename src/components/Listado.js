import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Listado() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token === null) {
            navigate('/');
        }
    }, [])

    return (
        <h2> Soy el componente listado</h2>
    )
}

export default Listado;
import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0){
            swAlert(<h5>Tenés que ingresar un título</h5>);
            return;
        }else {
            e.currentTarget.keyword.value = '';
            navigate(`/resultados?keyword=${keyword}`);
        }

    }
    return (
        <form onSubmit={submitHandler} className='d-flex align-items-center'>
            <label className='form-label mb-0 mx-2'>
                <input className='form-control' type='text' name='keyword' placeholder='Buscá una película...' />
            </label>
            <br />
            <button className='btn btn-success' type='submit'>Buscar</button>
        </form>
    )
}

export default Buscador


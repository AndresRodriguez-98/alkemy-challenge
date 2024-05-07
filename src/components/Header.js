import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <Link className='navbar-brand' to="/">AlkeFlix</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='navbar-item'>
                                <Link className='navbar-link' to="/">Home</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className='navbar-link' to="/listado">Listado</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}
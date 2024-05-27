import React from 'react'
import { Header } from './Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';

const Resultados = () => {
    const [moviesResult, setMoviesResult] = useState([])
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?&api_key=bdaf082608c78e4a7eb8c95d5d879e6d&language=es-ES&page=1&query=${keyword}`
    
        axios.get(endPoint)
            .then(response => {
                const moviesArray = response.data.results;

                if (moviesArray.length === 0){
                    swal(<h4>Tu búsqueda no arrojó resultados</h4>);
                }

                setMoviesResult(moviesArray);
            }).catch(error => console.log(error))
    }, [setMoviesResult])

    return (
        <>
            <Header />
            <h2>Buscaste: <em>{keyword}</em></h2>

            {moviesResult.length === 0 && <h3>No hay resultados</h3>}
            <div className="row">
                {
                    moviesResult.map((oneMovie, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <div className="card my-4 mx-2">
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title}</h5>
                                        <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Resultados
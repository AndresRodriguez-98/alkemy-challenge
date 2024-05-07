import { Link, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from './Header';

function Listado() {
    let token = localStorage.getItem('token')

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=bdaf082608c78e4a7eb8c95d5d879e6d&language=es-ES&page=1';

        axios.get(endPoint)
            .then(response => {
                const apiData = response.data
                setMoviesList(apiData.results);
            })
    }, [setMoviesList])

    return (
        <>
            <Header />
            { !token && <redirect to="/" />} 
            <div className="row">
                {
                    moviesList.map((oneMovie, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <div className="card my-4 mx-2">
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title}</h5>
                                        <p className="card-text">{oneMovie.overview.substring(0,200)}...</p>
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

export default Listado;
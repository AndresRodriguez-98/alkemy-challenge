import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Detalle = () => {
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=bdaf082608c78e4a7eb8c95d5d879e6d&language=es-ES`;

    axios.get(endPoint).then(response => {
      const apiData = response.data;
      setMovie(apiData);
    }).catch(error => {
      console.log(error, 'Hubo un error, intentá mas tarde')
    })
  }, [movieID])

  return (
    <>
      {!movie && <h2>Cargando...</h2>}
      {movie &&  // SHORT CIRCUIT RENDER
        <>
          <h2>{movie.title}</h2>
          <div className='row'>
            <div className='col-4'>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='card-img-top' alt='movie-poster' />
            </div>
            <div className='col-8'>
              <h5>Fecha de estreno: {movie.release_date}</h5>
              <h5>Reseña:</h5>
              <p>{movie.overview}</p>
              <h5>Rating: {movie.vote_average}</h5>
              <h5>Géneros:</h5>
{/*               <ul>
                {movie.genres.map((oneGenre, id) => <li key={oneGenre.id}>{oneGenre.name}</li>)}
              </ul> */}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Detalle
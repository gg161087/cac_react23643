import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from './../components/Header.jsx';
import { getDynamic } from '../utils/httpClient.js';

export const DetailMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        getDynamic(`/movie/${id}`).then((data) => {
            setMovie(data);
            console.log(movie);
        })
    }, [id])

    if (!movie) {
        return null
    }
    const imgURL= `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    return (
        <>
            <Header title='Movies CAC23643'></Header>
            <div className="DetailContainer">
                <img className="detail_container__img" src={imgURL} alt={movie.title} />
                <div className="detail_container__description">
                    <h2><strong>Titulo:</strong>{movie.title}</h2>
                    <p><strong>Descripcion:</strong>{movie.overview}</p>
                    <p><strong>Generos:</strong>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                </div>
            </div>
            <div className='copyRight'>
                <small>Todos los derechos reservados - Gonzalez Gonzalo</small>
            </div>            
        </>
    )
}
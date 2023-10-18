import { useState, useEffect} from 'react';

import { getDynamic } from '../../utils/httpClient.js';
import { MovieCard } from '../MovieCard/index.jsx';

import './MoviesGrid.css'

export const MoviesGrid = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getDynamic('/discover/movie').then((data) =>{
            setMovies(data.results)
        })
    }, [])
    
    return (
        <div className="container">
            {movies.map((movie) => (   
                <MovieCard movie={movie} key={movie.id}></MovieCard>            
            ))}            
        </div>
    )
}
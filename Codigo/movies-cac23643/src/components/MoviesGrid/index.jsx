import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { getDynamic } from '../../utils/httpClient.js';
import { MovieCard } from '../MovieCard/index.jsx';

import './MoviesGrid.css';

export const MoviesGrid = ({page}) => {
    const [movies,setPeliculas]= useState([])

    useEffect(()=>{
        getDynamic(`/discover/movie?page=${page}`).then((data)=>{        
            setPeliculas(data.results)
        })
    },[])
    
    return (
        <div className="container">
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard movie={movie} key={movie.id}></MovieCard>            
                </Link>   
            ))}            
        </div>
    )
}
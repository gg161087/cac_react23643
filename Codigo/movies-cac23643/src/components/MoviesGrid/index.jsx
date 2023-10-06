import movies from '../../movies.json';
import { MovieCard } from '../MovieCard/index.jsx';

import './MoviesGrid.css'

export const MoviesGrid = () => {
    return (
        <div className="container">
            {movies.map((movie) => (   
                <MovieCard movie={movie} key={movie.id}></MovieCard>            
            ))}
            {/* <ul className="moviesGrid">            
                {peliculas.map((pelicula) => (   
                    <li>
                        <PeliculasCard pelicula={pelicula}></PeliculasCard>
                    </li>             
                ))}
            </ul> */}
        </div>
    )
}
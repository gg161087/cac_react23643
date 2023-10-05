import movies from '../movies.json';
import { MovieCard } from './MovieCard.jsx';

export const MoviesGrid = () => {
    return (
        <div className="container">
            {movies.map((movie) => (   
                <MovieCard movie={movie}></MovieCard>            
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
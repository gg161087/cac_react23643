import peliculas from './peliculas.json';
import { PeliculasCard } from './PeliculasCard.jsx';

import './PeliculasGrid.css'

export const PeliculasGrid = () => {
    return (
        <div className="container">
            {peliculas.map((pelicula) => (   
                <PeliculasCard pelicula={pelicula}></PeliculasCard>            
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
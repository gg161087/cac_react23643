import './Card.css'

export const PeliculasCard = ({pelicula}) => {
    return (
        <div className="card">
            <img className="card__img" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={`poster de la pelicula ${pelicula.title}`} />
            <h3 className="card__title">{pelicula.title}</h3>
            <h4>{`Puntuación: ${pelicula.vote_average}`}</h4>
            <h5>{`Votantes: ${pelicula.vote_count}`}</h5>
        </div>
    )
}
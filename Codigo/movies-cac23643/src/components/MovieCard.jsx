export const MovieCard = ({movie}) => {
    return (
        <div className="card">
            <img className="card__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`poster de la pelicula ${movie.title}`} />
            <h3 className="card__title">{movie.title}</h3>
            <h4>{`Puntuación: ${movie.vote_average}`}</h4>
            <h5>{`Votantes: ${movie.vote_count}`}</h5>
        </div>
    )
}
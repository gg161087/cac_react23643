import './MovieCard.css';

export const MovieCard = ({movie}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="card">
            <div className="card__img">
                <img className="" src={imgUrl} alt={`poster de la pelicula ${movie.title}`} />
            </div>
            <div className="card__description">
                <h3 className="card__title">{movie.title}</h3>
                <h4>{`Puntuación: ${movie.vote_average}`}</h4>
                <h5>{`Votantes: ${movie.vote_count}`}</h5>
            </div>
        </div>
    )
}
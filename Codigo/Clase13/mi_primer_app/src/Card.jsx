import './Card.css'

const Card = ({ jugador }) => {
    return (
        <div class="card" style={{ backgroundColor: jugador.enColeccion ? "rgb(0, 128, 0)" : "rgb(55, 51, 51)" }}>
            <h2>Nombre: {jugador.nombre}</h2>
            <small>Edad: {jugador.nacimiento}</small>
            <p>Club: {jugador.club}</p>
            <small>Logros: {jugador.logros}</small>
            <p>En colección: {jugador.enColeccion ? 'Si' : 'No'}</p>
        </div>
    )
}

export default Card
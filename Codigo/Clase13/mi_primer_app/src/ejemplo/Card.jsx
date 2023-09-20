import './Card.css'

const Card = ({ apellido, nacimiento, clubes, mundial, late }) => {
    return (
        <div class="card">
            <h1 className={mundial ? 'dorado': 'plateado'}>{apellido}</h1>
            {/* <h1 style={{backgroundColor: mundial ? 'gold' : 'silver'}}>{apellido}</h1> */}
            <small>{nacimiento}</small>
            <p>{clubes}</p>
            <p>{mundial ? 'Gano un mundial 🏆' : 'Sigue participando ❄️'}</p>
            <small>{late ? 'Late ✔️' : 'Nola ❌'}</small>
        </div>
    )
}

export default Card
import './Card.css'

export const Card = (props) => {
    return (
        <>
            <h2 className={props.mundial ? 'dorado' : 'plateado'}>{props.apellido}</h2>
            <small>{props.nacimiento}</small>
            <p>{props.clubes}</p>
            <p>{props.mundial ? 'Gano un mundial' : 'aun no'}</p>
            <p>{props.late ? '✔' : '❌'}</p>
        </>        
    )
}
export const Boton = ({numero}) => {

    numero == undefined ? numero = 'default' : numero
    return (
        <button>{numero}</button>
    )

}
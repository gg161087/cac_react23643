import { Link } from 'react-router-dom';

import './Table.css';

export const Table = ({ heroes, onDelet }) => {
    /* Timestamp.fromDate(heroe.dateOfBirth) */
    return (
        <div className="container">
            <div className="table">
                    <div className="gap-2 sectionCreate">
                        <Link to="/create" className="btn btn-primary mt-2 mb-2 create">CREAR</Link>
                    </div>
                    <table className="table table-dark table-hover align-middle">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Especialidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {heroes.map((heroe) => (                                
                                <tr key={heroe.id} className='tableRow'>
                                    <td>{heroe.name}</td>
                                    <td>{heroe.lastName}</td>
                                    <td>
                                    {(() => {
                                        const dateOfBirth = new Date(heroe.dateOfBirth.seconds * 1000).toISOString().split('T')[0];
                                        const parts = dateOfBirth.split('-');
                                        return `${parts[2]}/${parts[1]}/${parts[0]}`;
                                    })()}
                                    </td>
                                    <td>{heroe.speciality}</td>
                                    <td className='actions'>
                                        <Link to={`edit/${heroe.id}`} className="btn btn-light"><i className="fa-sharp fa-solid fa-pencil"></i></Link>
                                        <button className="btn btn-danger" onClick={() => onDelet(heroe.id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';

export const Form = ({ onSubmit, defaultValues, title, edit }) => {
    const [values, setValues] = useState(defaultValues || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };
    return (
        <div className="form_container">
            <form className='form' onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input className='form-control' type="text" name="name" value={values.name || ''} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido:</label>
                    <input className='form-control' type="text" name="lastName" value={values.lastName || ''} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento:</label>
                    <input className='form-control' type="date" name="dateOfBirth" value={values.dateOfBirth || ''} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Especialidad:</label>
                    <input className='form-control' type="text" name="speciality" value={values.speciality || ''} onChange={handleChange}/>
                </div>
                <div className="mb-3 actions">
                    <Link to="/">Volver</Link>
                    <button className='btn btn-success' type="submit">{edit ? 'Guardar' : 'Enviar'}</button>
                </div>
            </form>
        </div>
    )
}
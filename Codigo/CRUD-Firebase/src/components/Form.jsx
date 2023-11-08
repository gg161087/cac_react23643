import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';

export const Form = ({ onSubmit, defaultValues, booleano }) => {
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
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-">
                            <label className="form-label">
                                Nombre:
                                <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="mb-">
                            <label className="form-label">
                                Apellido:
                                <input type="text" name="lastName" value={values.lastName || ''} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="mb-">
                            <label className="form-label">
                                Fecha de Nacimiento:
                                <input type="date" name="dateOfBirth" value={values.dateOfBirth || ''} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="mb-">
                            <label className="form-label">
                                Especialidad:
                                <input type="text" name="speciality" value={values.speciality || ''} onChange={handleChange} />
                            </label>
                        </div>
                        <button className='btn btn-success' type="submit">{booleano ? 'Guardar' : 'Enviar'}</button>
                    </form>
                    <Link to="/">Volver</Link>
                </div>
            </div>
    )
}
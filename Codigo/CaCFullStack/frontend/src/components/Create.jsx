import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { API } from './../../config.js';

export const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const create = async (e) => {
        e.preventDefault()
        await axios.post(API, {
            title,
            content
        });
        navigate('/');
    };

    return (
        <div className="container">
            <div>
                <h1>Crear Post</h1>
                <form onSubmit={create}>
                    <div className="mb-3">
                        <label htmlFor='title' className='form-label'></label>
                        <input className="form-control" type="text" id='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='content' className='form-label'></label>
                        <input className="form-control" type="text" id='content' value={content} onChange={(e)=>setContent(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button type='submit' className='btn btn-primary btn-lg'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
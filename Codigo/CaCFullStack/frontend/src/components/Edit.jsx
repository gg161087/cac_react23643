import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { API } from './../../config.js';

export const Edit = () => {    
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const editPost = async () => {        
        await axios.put(`${API}/${id}`, {
            title,
            content
        });
        navigate('/');
    };

    const getPostById = async () => {
        const { data } = await axios.get(`${API}/${id}`)        
        setTitle(data.title)
        setContent(data.content)
    }
    useEffect(() => {
        getPostById()
    },[id])

    return (
        <div className="container">
            <div>
                <h1>Editar Post</h1>
                <form onSubmit={editPost}>
                    <div className="mb-3">
                        <label htmlFor='title' className='form-label'></label>
                        <input className="form-control" type="text" id='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='content' className='form-label'></label>
                        <input className="form-control" type="text" id='content' value={content} onChange={(e)=>setContent(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button type='submit' className='btn btn-primary btn-lg'>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
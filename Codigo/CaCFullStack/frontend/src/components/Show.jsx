import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './Icon.jsx';

import { API } from './../../config.js';

export const Show = () => {

    const [posts, setPosts] = useState([]);

    const getAllPost = async () => {
        const response = await axios.get(API)
        setPosts(response.data.results)
        console.log(posts);
    }

    const deletePost = async (id) => {
        const response = await axios.delete(`${API}/${id}`)
    }

    useEffect(() => {
        getAllPost()
    }, [])

    if (!posts) {
        <Icon css='icon' icon={faSpinner} />
    }

    return (
        <div className="container text-center">
            <div className='m-3'>
                <small className='m-2'>Create Post</small>
                <Link to='/create' className='btn btn-primary btn-lg'>
                    <Icon css='icon' icon={faPlus} />
                </Link>
            </div>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Contexto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id} className='align-middle'>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>
                                <Link to={`/edit/${post.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deletePost(post.id)} className='btn btn-danger btn-lg'>
                                    <Icon css='icon' icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
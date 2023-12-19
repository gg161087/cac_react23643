import { postModel } from './../models/postModel.js';

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await postModel.findAll();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener todos los posts.'});
    }
};

const getPost = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await postModel.findByPk(id);   
        res.status(200).json(post)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el post por ID.'});
    }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({           
            message: 'Campos inválidos. Se requieren título y contenido.'
        });
    } else {
        try {
            const response = await postModel.create({
                title: title,
                content: content
            });
    
            if (!response) {
                res.status(500).json({                   
                    message: 'No se pudo crear el post.'
                });
            } else {
                res.status(200).json({                    
                    message: 'Post agregado exitosamente'
                });
            }    
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el post.'});
        }
    }
};

const editPost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({           
            message: 'Campos inválidos. Se requieren título y contenido.'
        });
    }

    try {
        const response = await postModel.update(
            { title: title, content: content },
            { where: { id: id } }
        );

        if (response[0] === 0 || !response) {
            return res.status(404).json({               
                message: 'El post no fue encontrado o no se pudo actualizar.'
            });
        }
        res.status(200).json({            
            message: 'Post actualizado correctamente'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({            
            message: 'Error al actualizar el post.'
        });
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await postModel.destroy({
            where: { id: id }
        });

        if (response === 0) {
            return res.status(404).json({                
                message: 'El post no fue encontrado o no se pudo eliminar.'
            });
        }
        res.status(200).json({            
            message: 'Post eliminado correctamente'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({            
            message: 'Error al eliminar el post.'
        });
    }
}

export default {
    getAllPosts,
    getPost,
    createPost,
    editPost,
    deletePost
}
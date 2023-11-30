import { Router } from 'express';

import postController from './../controllers/postController.js';

export const postRoutes = Router()

postRoutes.get('/', postController.getAllPosts);
postRoutes.get('/:id', postController.getPost);
postRoutes.post('/', postController.createPost);
postRoutes.put('/:id', postController.editPost);
postRoutes.delete('/:id', postController.deletePost);
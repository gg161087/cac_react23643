import { Router } from 'express';

import postController from './../controllers/postController.js';

export const postRoutes = Router()

postRoutes.get('/', postController.getAllPosts);
postRoutes.get('/:id', postController.getPostById);
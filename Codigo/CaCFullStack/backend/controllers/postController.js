import { postModel } from './../models/postModel.js';

const getAllPosts = async (req, res, next) => {
    try {
        const response = await postModel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const getPostById = async (req, res, next) => {
    const {id} = req.params
    try {
        const response = await postModel.findByPk(id);
        if (!response) {
            res.status(404).json({
                success: false,
                results: null,
                message: 'bad request'
            })
        }
        res.status(404).json({
            success: true,
            results: response
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            results: 'error, bad request'
        })
    }
}

export default {
    getAllPosts,
    getPostById
}
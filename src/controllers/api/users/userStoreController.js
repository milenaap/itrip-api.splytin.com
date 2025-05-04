import { response, request } from 'express';



export const userStoreController = async(req, res = response) => {

    const { name, email } = req.body;

    res.status(201).json({
        msg: 'store API - Controller',
        name, 
        email
    });
}

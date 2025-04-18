import { response } from "express";



export const userUpdateController = async(req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - Controller',
        id
    });
}
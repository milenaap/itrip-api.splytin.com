import { response } from "express";


export const userDeleteController = async(req, res = response) => {

    const { id } = req.params;

    return res.json({
        msg: 'delete API - Controller',
        id
    });
    
}
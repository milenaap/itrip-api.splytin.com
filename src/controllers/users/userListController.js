import { response, request } from 'express';



export const userListController = async(req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page, limit } = req.query;
    
    res.json({
        msg: 'get API - Controller',
        q, 
        nombre, 
        apikey,
        page,
        limit
    });
}
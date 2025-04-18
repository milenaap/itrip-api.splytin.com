import { response, request } from 'express';



export const userListController = async(req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page, limit } = req.query;
    
    res.json({
        msg: 'list API - Controller',
        q, 
        nombre, 
        apikey,
        page,
        limit
    });
}
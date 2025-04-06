import { response, request } from 'express';



export const userGet = (req = request, res = response) => {

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


export const userPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controller',
        nombre, 
        edad
    });
}


export const userPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - Controller',
        id
    });
}

export const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

export const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    });
}
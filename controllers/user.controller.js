import { response } from 'express';



export const userGet = (req, res = response) => {
    
    res.json({
        msg: 'get API - Controller 1111'
    });
}


export const userPost = (req, res = response) => {
    res.status(201).json({
        msg: 'post API - Controller'
    });
}


export const userPut = (req, res = response) => {
    res.json({
        msg: 'put API - Controller'
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
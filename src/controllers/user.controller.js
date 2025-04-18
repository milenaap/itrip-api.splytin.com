import { response, request } from 'express';




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
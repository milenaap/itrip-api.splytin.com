import { response } from "express";


export const userShowController = async(req, res = response) => {
    
    const data = {};

    return res.json({
        msg: 'show API - Controller',
        data
    });

}


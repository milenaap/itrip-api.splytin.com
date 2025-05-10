import { response } from "express";




export const testController = async(req, res = response) => {

    //TODO

    return res.json({
        msg: 'API - test'
    });
}
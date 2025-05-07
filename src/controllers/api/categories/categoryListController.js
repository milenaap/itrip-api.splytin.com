import { response } from "express";

export const categoryListController = async(req, res = response) => {
    return res.json({
        msg: 'API- List Category'
    });
}
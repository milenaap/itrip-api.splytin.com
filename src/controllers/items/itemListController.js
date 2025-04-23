import { response } from "express";


export const itemListController = async(req, res = response) => {
    
    // return res.json({
    //     msg: 'API List ITem',
    //     success: true,
    // });


    const data = await Item.find();

    return res.handler.respondWithData(data, 'API List ITem');



}
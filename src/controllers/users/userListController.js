import { response, request } from 'express';
import User from '../../models/User.js';



export const userListController = async(req = request, res = response) => {
    

    try {
        
        const data = await User.findAll();
        return res.handler.respondWithData(data,'list API - Controller');

    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

    

}
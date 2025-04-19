import { response, request } from 'express';
import User from '../../models/User.js';



export const userListController = async(req = request, res = response) => {
    
    const data = await User.findAll();
    //const data = await User.findOne({ id: 1});

    res.handler.respondWithData(data,'list API - Controller');
    res.handler.respondHttpUnauthorized();

    
}
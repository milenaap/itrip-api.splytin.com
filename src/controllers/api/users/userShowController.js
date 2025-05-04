import { response } from "express";
import User from "../../../models/User.js";
import { UserRepository } from "../../../repositories/users/userRepository.js";



const userRepo = new UserRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const userShowController = async(req, res = response) => {
    
    const { id } = req.params;
    
    console.log(id);

    try {
        const data = await userRepo.show(id);

        return res.handler.respondWithData('User show', data);

    } catch (error) {
        
    }

    const data = {};

    return res.json({
        msg: 'show API - Controller',
        data
    });

}


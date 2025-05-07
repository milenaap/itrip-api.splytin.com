import { response, request } from 'express';
import { UserRepository } from '../../../repositories/users/userRepository.js';


const userRepo = new UserRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const userListController = async(req = request, res = response) => {

    try {
        const data = await userRepo.list();
        return res.handler.respondWithData('User list', data);

    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}



import { response } from "express";

export const userListController = async(req, res = response) => {

    //TODO

    const data = await User.findby();

    return res.handler.respondWithData('List', data);

    return res.json({
        msg: 'API - userList'
    });
}
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
        return res.handler.respondWithData('list API - Controller', data);

    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
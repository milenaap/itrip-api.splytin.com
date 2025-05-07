import { response } from "express";
import { UserRepository } from '../../../repositories/users/userRepository.js';


const userRepo = new UserRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const userDeleteController = async(req, res = response) => {

    const { id } = req.params;

    try {
        await userRepo.destroy(id);
        return res.handler.respondWithData('User deleted', true);
    } catch (error) {
        console.error('❌ Error in userDeleteController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }
}
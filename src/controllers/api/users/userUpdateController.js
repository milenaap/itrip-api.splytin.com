import { response } from "express";
import bcrypt from 'bcryptjs';
import { UserRepository } from "../../../repositories/users/userRepository.js";


const userRepo = new UserRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const userUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
        user_status_id,
        name, 
        email,
        password,
    } = req.body;



    const salt = bcrypt.genSaltSync();
    dataNew.password = bcrypt.hashSync(password, salt);


    try {
        const data = await userRepo.update(id, data);
        return res.handler.respondWithData('User list', data);

    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
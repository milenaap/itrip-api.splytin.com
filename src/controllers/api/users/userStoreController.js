import { response, request } from 'express';
import bcrypt from 'bcryptjs';
import { UserRepository } from '../../../repositories/users/userRepository.js';


const userRepo = new UserRepository();



/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const userStoreController = async(req, res = response) => {

    const { 
        user_status_id,
        name, 
        email,
        password,
    } = req.body;

    const dataNew = {
        user_status_id,
        name, 
        email,
        password,
    };


    const salt = bcrypt.genSaltSync();
    dataNew.password = bcrypt.hashSync(password, salt);


    try {

        const data = await userRepo.store(dataNew);

        return res.handler.respondWithData(data, 'User created');
        
    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}

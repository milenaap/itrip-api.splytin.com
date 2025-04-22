import { response, request } from 'express';
import { UserRepository } from '../../repositories/users/userRepository.js';
import User from '../../models/User.js';


const userRepo = new UserRepository();

export const userListController = async(req = request, res = response) => {

    try {

        console.log(User.associations);

        const data = await userRepo.list();
        return res.handler.respondWithData(data,'list API - Controller');

    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
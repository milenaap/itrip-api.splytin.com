import { response } from "express";
import { AbilityGroupRepository } from "../../../repositories/abilityGroups/abilityGroupRepository.js";


const repository = new AbilityGroupRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const abilityGroupListController = async(req, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Ability Groups list', data);

    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
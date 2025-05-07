import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import Ability from "../../models/Ability.js";
import { validateJWT } from "../../middlewares/validateJWT.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], abilityListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Ability) ),
    validateFields
], abilityShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], abilityStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], abilityUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], abilityDeleteController);


export default router;
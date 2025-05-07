import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], abilityUsersListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], abilityUsersShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], abilityUsersStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], abilityUsersUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], abilityUsersDeleteController);


export default router;
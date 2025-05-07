import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { validateJWT } from "../../middlewares/validateJWT.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], abilityGroupListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], abilityGroupShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], abilityGroupStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], abilityGroupUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], abilityGroupDeleteController);


export default router;
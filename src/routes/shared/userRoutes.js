import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], userListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], userShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], userStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], userUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], userDeleteController);


export default router;
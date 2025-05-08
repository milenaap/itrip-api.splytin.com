import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], userSessionListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], userSessionShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], userSessionStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], userSessionUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], userSessionDeleteController);


export default router;
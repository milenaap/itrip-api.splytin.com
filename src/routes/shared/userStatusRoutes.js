import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], userStatusListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], userStatusShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], userStatusStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], userStatusUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], userStatusDeleteController);


export default router;
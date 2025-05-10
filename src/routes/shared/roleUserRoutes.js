import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], roleUserListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], roleUserShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], roleUserStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], roleUserUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], roleUserDeleteController);


export default router;
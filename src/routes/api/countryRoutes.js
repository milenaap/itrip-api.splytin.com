import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

/**
 * List
 */
router.get('/', [], templateListController);

/**
 * Show
 */
router.get('/:id', [
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], templateShowController);

/**
 * Store
 */
router.post('/', [], templateStoreController);

/**
 * Update
 */
router.put('/:id', [], templateUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [], templateDeleteController);


export default router;
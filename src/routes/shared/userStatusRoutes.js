import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { userStatusListController } from "../../controllers/shared/userStatus/userStatusListController.js";
import { userStatusShowController } from "../../controllers/shared/userStatus/userStatusShowController.js";
import { userStatusStoreController } from "../../controllers/shared/userStatus/userStatusStoreController.js";
import { userStatusUpdateController } from "../../controllers/shared/userStatus/userStatusUpdateController.js";
import { userStatusDeleteController } from "../../controllers/shared/userStatus/userStatusDeleteController.js";

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
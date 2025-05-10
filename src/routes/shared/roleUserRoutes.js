import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import { roleUserListController } from "../../controllers/shared/role_users/roleUserListController.js";
import { roleUserShowController } from "../../controllers/shared/role_users/roleUserShowController.js";
import { roleUserStoreController } from "../../controllers/shared/role_users/roleUserStoreController.js";
import { roleUserUpdateController } from "../../controllers/shared/role_users/roleUserUpdateController.js";
import { roleUserDeleteController } from "../../controllers/shared/role_users/roleUserDeleteController.js";

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
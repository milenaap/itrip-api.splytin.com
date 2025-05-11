import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import { userListController } from "../../controllers/shared/users/userListController.js";
import { userShowController } from "../../controllers/shared/users/userShowController.js";
import { userStoreController } from "../../controllers/shared/users/userStoreController.js";
import { userUpdateController } from "../../controllers/shared/users/userUpdateController.js";
import { userDeleteController } from "../../controllers/shared/users/userDeleteController.js";

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
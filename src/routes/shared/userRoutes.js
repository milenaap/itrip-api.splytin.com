import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import { userListController } from "../../controllers/shared/user/userListController.js";
import { userShowController } from "../../controllers/shared/user/userShowController.js";
import { userStoreController } from "../../controllers/shared/user/userStoreController.js";
import { userUpdateController } from "../../controllers/shared/user/userUpdateController.js";
import { userDeleteController } from "../../controllers/shared/user/userDeleteController.js";

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
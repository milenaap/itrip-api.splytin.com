import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { userSessionListController } from "../../controllers/shared/user_sessions/userSessionListController.js";
import { userSessionShowController } from "../../controllers/shared/user_sessions/userSessionShowController.js";
import { userSessionStoreController } from "../../controllers/shared/user_sessions/userSessionStoreController.js";
import { userSessionUpdateController } from "../../controllers/shared/user_sessions/userSessionUpdateController.js";
import { userSessionDeleteController } from "../../controllers/shared/user_sessions/userSessionDeleteController.js";

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
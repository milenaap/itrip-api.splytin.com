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
router.get('/list', [
    validateJWT,
], userStatusListController);

/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], userStatusShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], userStatusStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
], userStatusUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
], userStatusDeleteController);


export default router;
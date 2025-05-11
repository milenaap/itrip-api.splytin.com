import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import { abilityUserListController } from "../../controllers/shared/ability_users/abilityUserListController.js";
import { abilityUserShowController } from "../../controllers/shared/ability_users/abilityUserShowController.js";
import { abilityUserStoreController } from "../../controllers/shared/ability_users/abilityUserStoreController.js";
import { abilityUserUpdateController } from "../../controllers/shared/ability_users/abilityUserUpdateController.js";
import { abilityUserDeleteController } from "../../controllers/shared/ability_users/abilityUserDeleteController.js";

const router = Router();

/**
 * List
 */
router.get('/list', [
    validateJWT,
], abilityUserListController);

/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], abilityUserShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], abilityUserStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
], abilityUserUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
], abilityUserDeleteController);


export default router;
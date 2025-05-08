import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { abilityUserListController } from "../../controllers/shared/ability_users/abilityUserListController.js";
import { abilityUserShowController } from "../../controllers/shared/ability_users/abilityUserShowController.js";
import { abilityUserStoreController } from "../../controllers/shared/ability_users/abilityUserStoreController.js";
import { abilityUserUpdateController } from "../../controllers/shared/ability_users/abilityUserUpdateController.js";
import { abilityUserDeleteController } from "../../controllers/shared/ability_users/abilityUserDeleteController.js";

const router = Router();

/**
 * List
 */
router.get('/', [
    validateJWT,
], abilityUserListController);

/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], abilityUserShowController);

/**
 * Store
 */
router.post('/', [
    validateJWT,
], abilityUserStoreController);

/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], abilityUserUpdateController);

/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], abilityUserDeleteController);


export default router;
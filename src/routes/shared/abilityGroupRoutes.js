import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import { abilityGroupListController } from "../../controllers/shared/ability_groups/abilityGroupListController.js";
import { abilityGroupShowController } from "../../controllers/shared/ability_groups/abilityGroupShowController.js";
import { abilityGroupStoreController } from "../../controllers/shared/ability_groups/abilityGroupStoreController.js";
import { abilityGroupUpdateController } from "../../controllers/shared/ability_groups/abilityGroupUpdateController.js";
import { abilityGroupDeleteController } from "../../controllers/shared/ability_groups/abilityGroupDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/', [
    validateJWT,
], abilityGroupListController);


/**
 * Show
 */
router.get('/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], abilityGroupShowController);


/**
 * Store
 */
router.post('/', [
    validateJWT,
], abilityGroupStoreController);


/**
 * Update
 */
router.put('/:id', [
    validateJWT,
], abilityGroupUpdateController);


/**
 * Delete
 */ 
router.delete('/:id', [
    validateJWT,
], abilityGroupDeleteController);


export default router;
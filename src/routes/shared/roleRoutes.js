import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { roleListController } from "../../controllers/shared/roles/roleListController.js";
import { roleShowController } from "../../controllers/shared/roles/roleShowController.js";
import { roleStoreController } from "../../controllers/shared/roles/roleStoreController.js";
import { roleUpdateController } from "../../controllers/shared/roles/roleUpdateController.js";
import { roleDeleteController } from "../../controllers/shared/roles/roleDeleteController.js";

const router = Router();

/**
 * List
 */
router.get('/list', [
    validateJWT,
], roleListController);

/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    check('name', 'El name es obligatorio').not().isEmpty(),
    validateFields
], roleShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], roleStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
], roleUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
], roleDeleteController);


export default router;
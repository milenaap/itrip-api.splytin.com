import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { testController } from "../../controllers/dev/testController.js";

const router = Router();

/**
 * List
 */
router.get('/', [], testController);



export default router;
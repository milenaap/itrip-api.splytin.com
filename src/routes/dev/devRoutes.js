import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { testController } from "../../controllers/dev/testController.js";

const router = Router();

/**
 * List
 */
router.get('/', [], testControllerController);



export default router;
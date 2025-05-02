import { Router } from "express";
import { categoryListController } from "../../controllers/categories/categoryListController.js";


const router = Router();

router.get('/', categoryListController);


export default router;
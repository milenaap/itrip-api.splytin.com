import { Router } from "express";
import { itemListController } from "../../controllers/items/itemListController.js";


const router = Router();


router.get('/', itemListController);



export default router;
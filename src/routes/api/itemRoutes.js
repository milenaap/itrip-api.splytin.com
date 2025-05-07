import { Router } from "express";
import { itemListController } from "../../controllers/api/items/itemListController.js";



const router = Router();


router.get('/', itemListController);


export default router;
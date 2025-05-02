import { Router } from "express";
import { authLoginController } from "../../controllers/auth/authLoginController.js";




const router = Router();


router.post('/login', authLoginController);



export default router;
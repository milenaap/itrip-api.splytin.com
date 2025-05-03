import { Router } from "express";
import { authLoginController } from "../../controllers/auth/authLoginController.js";
import { formParser } from "../../middlewares/formParser.js";



const router = Router();


router.post('/login', [ formParser ], authLoginController);



export default router;
import { Router } from "express";
import { formParser } from "../../middlewares/formParser.js";
import { authLoginController } from "../../controllers/api/auth/authLoginController.js";



const router = Router();


router.post('/login', [ formParser ], authLoginController);



export default router;
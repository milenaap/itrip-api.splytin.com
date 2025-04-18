import { Router } from 'express';
import { 
    userDelete, 
    userGet, 
    userPatch, 
    userPost, 
    userPut 
} from '../controllers/user.controller.js';


const router = Router();


/**

List (GET): /api/usuarios
Show (GET): /api/usuarios/:id
Store (POST): /api/usuarios             // Se envia data
UPDATE (PUT): /api/usuarios/:id         // Se envia data
DELETE (DELETE): /api/usuarios/:id

*/



router.get('/', userGet);



// .../api/usuarios/:id
router.put('/:id', userPut);


router.post('/', userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);


export default router;
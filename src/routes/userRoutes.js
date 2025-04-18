import { Router } from 'express';
import { 
    userDelete, 
    userPatch, 
    userPost, 
    userPut 
} from '../controllers/user.controller.js';
import { userListController } from '../controllers/users/userListController.js';
import { userShowController } from '../controllers/users/userShowController.js';



const router = Router();


router.get('/', userListController);

router.get('/:id', userShowController);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);


export default router;
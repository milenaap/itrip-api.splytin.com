import { Router } from 'express';

import { userListController } from '../controllers/users/userListController.js';
import { userShowController } from '../controllers/users/userShowController.js';
import { userStoreController } from '../controllers/users/userStoreController.js';
import { userUpdateController } from '../controllers/users/userUpdateController.js';
import { userDeleteController } from '../controllers/users/userDeleteController.js';



const router = Router();


router.get('/', userListController);

router.get('/:id', userShowController);

router.post('/', userStoreController);

router.put('/:id', userUpdateController);

router.delete('/:id', userDeleteController);


export default router;
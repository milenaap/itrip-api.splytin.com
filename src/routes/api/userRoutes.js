import { Router } from 'express';

import { userListController } from '../../controllers/users/userListController.js';
import { userShowController } from '../../controllers/users/userShowController.js';
import { userStoreController } from '../../controllers/users/userStoreController.js';
import { userUpdateController } from '../../controllers/users/userUpdateController.js';
import { userDeleteController } from '../../controllers/users/userDeleteController.js';
import { formParser } from '../../middlewares/formParser.js';
import { validateJWT } from '../../middlewares/validateJWT.js';



const router = Router();


router.get('/', [ validateJWT ], userListController);

router.get('/:id', [ validateJWT ], userShowController);

router.post('/', [ 
    formParser, 
    validateJWT 
], userStoreController);

router.put('/:id', [ 
    formParser, 
    validateJWT 
], userUpdateController);

router.delete('/:id',[ validateJWT ], userDeleteController);


export default router;
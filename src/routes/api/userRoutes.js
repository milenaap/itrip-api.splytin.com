import { Router } from 'express';
import { param } from 'express-validator';
import { userListController } from '../../controllers/api/users/userListController.js';
import { userShowController } from '../../controllers/api/users/userShowController.js';
import { userStoreController } from '../../controllers/api/users/userStoreController.js';
import { userUpdateController } from '../../controllers/api/users/userUpdateController.js';
import { userDeleteController } from '../../controllers/api/users/userDeleteController.js';
import { formParser } from '../../middlewares/formParser.js';
import { validateJWT } from '../../middlewares/validateJWT.js';
import { validateFields } from '../../middlewares/validateFields.js';
import User from '../../models/User.js';
import { checkIdExists } from '../../helpers/validators/checkIdExists.js';



const router = Router();

// List
router.get('/', [ validateJWT ], userListController);

// Show
router.get('/:id', [
    validateJWT,
    param('id').isInt().withMessage('The field ID should be number'),
    param('id').custom( checkIdExists(User) ),
    validateFields,
], userShowController);


// Store
router.post('/', [ 
    formParser, 
    validateJWT 
], userStoreController);

// Update
router.put('/:id', [ 
    formParser, 
    validateJWT,
    validateFields,
], userUpdateController);

// Delete
router.delete('/:id',[ validateJWT ], userDeleteController);


export default router;
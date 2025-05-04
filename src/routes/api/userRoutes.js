import { Router } from 'express';
import { check, param } from 'express-validator';
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
import UserStatus from '../../models/UserStatus.js';



const router = Router();

// List
router.get('/', [ validateJWT ], userListController);

// Show
router.get('/:id', [
    validateJWT,
    param('id').isInt().withMessage('The field ID must be an integer'),
    param('id').custom( checkIdExists(User) ),
    validateFields,
], userShowController);


// Store
router.post('/', [ 
    validateJWT,
    formParser, 
    check('user_status_id').isInt().withMessage('The user_status_id must be an integer').custom( checkIdExists(UserStatus) ),
    check('name').notEmpty().withMessage('The field name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('The field password must be at least 6 characters long'),
    validateFields,
], userStoreController);


// Update
router.put('/:id', [ 
    validateJWT,
    formParser, 

     // Validate :id param
    param('id')
        .isInt().withMessage('User ID must be an integer')
        .custom(checkIdExists(User)),

    body('name')
        .optional()
        .notEmpty().withMessage('Name cannot be empty'),

    body('email')
        .optional()
        .isEmail().withMessage('Invalid email address'),

    body('password')
        .optional()
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    body('user_status_id')
        .optional()
        .isInt().withMessage('user_status_id must be an integer')
        .custom(checkIdExists(UserStatus)),

    validateFields,
], userUpdateController);



// Delete
router.delete('/:id',[ 
    validateJWT,
    formParser,
    param('id')
        .isInt().withMessage('User ID must be an integer')
        .custom(checkIdExists(User)),

], userDeleteController);


export default router;
// User routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
// api/users
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/userslookuproles', userController.UsersLookupRoles);
router.get('/userslookupspecialties', userController.UsersLookupSpecialties);
router.get('/usersproject', userController.UsersProject);
router.get('/specialty/:specialty', userController.getUsersBySpecialty);
router.put('/:id', userController.updateUser);
router.put('/dni/:dni', userController.updateUserByDni);
router.get('/:id', userController.getUser);
router.get('/dni/:dni', userController.getUserByDni);
router.delete('/:id', userController.deleteUser);
module.exports = router;    
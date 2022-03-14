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
router.put('/:id', userController.updateUser);
router.get('/:id', userController.getUser);
router.get('/dni/:dni', userController.getUserByDni);
router.delete('/:id', userController.deleteUser);
module.exports = router;    
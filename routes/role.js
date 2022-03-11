const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// api/roles
router.post('/', roleController.createRole);
router.get('/', roleController.getRoles);
router.get('/rolesmatchf', roleController.RolesMatchF);
router.get('/rolesmatcht', roleController.RolesMatchT);
router.put('/:id', roleController.updateRole);
router.get('/:id', roleController.getRole);
router.delete('/:id', roleController.deleteRole);
module.exports = router;  
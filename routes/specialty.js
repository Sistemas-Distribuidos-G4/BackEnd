// Specialty routes
const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialtyController');

// api/specialties
router.post('/', specialtyController.createSpecialty);
router.get('/', specialtyController.getSpecialties);
//router.get('/specialtiesmatchf', specialtyController.SpecialtiesMatchF);
//router.get('/specialtiesmatcht', specialtyController.SpecialtiesMatchT);
router.put('/:id', specialtyController.updateSpecialty);
router.get('/:id', specialtyController.getSpecialty);
router.delete('/:id', specialtyController.deleteSpecialty);
module.exports = router;    
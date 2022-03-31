// Medical Records routes
const express = require('express');
const router = express.Router();
const medicalRecController = require('../controllers/medicalRecController');

// api/medicalRec
router.put('/:id', medicalRecController.updateMedicalRec);
router.post('/', medicalRecController.createMedicalRec);
router.get('/dni/:dni', medicalRecController.getMedicalRecByDni);
module.exports = router; 
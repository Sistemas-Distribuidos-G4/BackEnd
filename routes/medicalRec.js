// Medical Records routes
const express = require('express');
const router = express.Router();
const medicalRecController = require('../controllers/medicalRecController');

// api/medicalRec
router.put('/dni/:dni_patient', medicalRecController.updateMedicalRec);
router.post('/', medicalRecController.createMedicalRec);
router.get('/dni/:dni_patient', medicalRecController.getMedicalRecByDni);
module.exports = router; 
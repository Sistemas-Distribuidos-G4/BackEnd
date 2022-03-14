// Patients routes
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// api/patients
router.post('/', patientController.createPatient);
router.get('/', patientController.getPatients);
router.get('/patientsproject',patientController.PatientsProject);
router.get('/pacf', patientController.getPatientsF);
router.get('/patientsmatchf',patientController.patientsMatchF);
router.get('/patientsmatchm',patientController.patientsMatchM);
router.get('/pacm', patientController.getPatientsM);
router.get('/:id', patientController.getPatient);
router.get('/:dni', patientController.getPatientByDni);
router.put('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);
module.exports = router; 
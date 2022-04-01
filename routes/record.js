// Records routes
const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');

// api/record
router.post('/', recordController.createRecord);
router.get('/', recordController.getRecord);
router.get('/num_history/:num_history', recordController.getRecordByHistory);
router.get('/dni/:dni_patient', recordController.getRecordByDniPatient);
module.exports = router; 
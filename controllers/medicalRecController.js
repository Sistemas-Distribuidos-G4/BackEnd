const MedicalRec = require("../models/MedicalRec");

exports.createMedicalRec = async (req, res) => {

    try {
        let medicalRec;
        // Medical Record creation
        medicalRec = new MedicalRec(req.body);
        await medicalRec.save();
        res.send(medicalRec);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 

exports.getMedicalRecByDni = async (req, res) => {

    try {
        let medicalRec = await MedicalRec.findOne({dni_patient: req.params.dni_patient});

        if(!medicalRec) {
            res.status(404).json({ msg: 'Medical Record does not exist' })
        }
       
        res.json(medicalRec);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateMedicalRec = async (req, res) => {

    try {
        const { num_history, dni_patient, blood_type, family_medical_history, organ_donor, created_date, updated_date } = req.body;
        let medicalRec = await MedicalRec.findOne({dni_patient: req.params.dni_patient});

        if(!medicalRec) {
            res.status(404).json({ msg: 'Medical Record does not exist' })
        }

        medicalRec.num_history = num_history;
        medicalRec.dni_patient = dni_patient;
        medicalRec.blood_type = blood_type;
        medicalRec.family_medical_history = family_medical_history;
        medicalRec.organ_donor = organ_donor;
        medicalRec.created_date = created_date;
        medicalRec.updated_date = updated_date;

        medicalRec = await MedicalRec.findOneAndUpdate({ dni_patient: req.params.dni_patient }, medicalRec, { new: true } )
        res.json(medicalRec);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
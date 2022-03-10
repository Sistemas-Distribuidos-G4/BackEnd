const Patient = require("../src/models/Patient");

exports.createPatient = async (req, res) => {

    try {
        let patient;

        // Patient creation
        patient = new Patient(req.body);

        await patient.save();
        res.send(patient);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//get patients con find
exports.getPatients = async (req, res) => {

    try {

        const patients = await Patient.find();
        res.json(patients)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}
//find pacientes genero f
exports.getPatientsF = async (req, res) => {

    try {
        let patientsf = await Patient.find({"gender":"female"});

        if(!patientsf) {
            res.status(404).json({ msg: 'Pacients does not exist' })
        }
       
        res.json(patientsf);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    } 
}
//find pacientes genero m
exports.getPatientsM = async (req, res) => {

    try {
        let patientsm = await Patient.find({"genero_pac":"m"});

        if(!patientsm) {
            res.status(404).json({ msg: 'Pacients does not exist' })
        }

        res.json(patientsm);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 

//patient agregate match genero f
exports.patientsMatchF = async (req, res) => {

    try {
         
        const patientsf = await Patient.aggregate([
                {
                   $match:
                      {
                        gender: "female"

                      }
                }]); 
        res.json(patientsf)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
//patient agregate match genero m
exports.patientsMatchM= async (req, res) => {

    try {
         
        const patientsAgregate = await Patient.aggregate([
                {
                   $match:
                      {
                        gender:"male",

                      }
                }
 
        ]); 
        res.json(patientsAgregate)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


//patient agregate project

exports.PatientsProject = async (req, res) => {

    try {

        const patientsagregate = await Patient.aggregate([
                {
                $project:
                        {
                        name:1,
                       
                        }
            }
        ]); 
        res.json(patientsagregate)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}


exports.updatePatient = async (req, res) => {

    try {
        const { dni_pac, genero_pac, nombre_pac, apellido_pac,celular_pac,fechanac_pac, created_date } = req.body;
        let patient = await Patient.findById(req.params.id);

        if(!patient) {
            res.status(404).json({ msg: 'Patient does not exist' })
        }

        patient.dni_pac = dni_pac;
        patient.genero_pac = genero_pac;
        patient.nombre_pac = nombre_pac;
        patient.apellido_pac = apellido_pac;
        patient.celular_pac=celular_pac;
        patient.fechanac_pac=fechanac_pac;
        patient.created_date = created_date;

        patient = await Patient.findOneAndUpdate({ _id: req.params.id },patient, { new: true} )
        res.json(patient);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.getPatient = async (req, res) => {

    try {
        let patient = await Patient.findById(req.params.id);

        if(!patient) {
            res.status(404).json({ msg: 'Patient does not exist' })
        }
       
        res.json(patient);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deletePatient = async (req, res) => {

    try {
        let patient = await Patient.findById(req.params.id);

        if(!patient) {
            res.status(404).json({ msg: 'Patient does not exist' })
        }
       
        await Patient.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Patient successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
const Record = require("../models/Record");

exports.createRecord = async (req, res) => {

    try {
        let record;
        // Record creation
        record = new Record(req.body);
        await record.save();
        res.send(record);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getRecord = async (req, res) => {

    try {

        const record = await Record.find();
        res.json(record)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}

exports.getRecordByHistory = async (req, res) => {

    try {
        let record = await Record.find({num_history: req.params.num_history});

        if(!record) {
            res.status(404).json({ msg: 'Records does not exist' })
        }
       
        res.json(record);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getRecordByDniPatient = async (req, res) => {

    try {
        let record = await Record.find({dni_patient: req.params.dni_patient});

        if(!record) {
            res.status(404).json({ msg: 'Records does not exist' })
        }
       
        res.json(record);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


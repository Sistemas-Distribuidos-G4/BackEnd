const Specialty = require("../src/models/Specialty");


exports.createSpecialty = async (req, res) => {

    try {
        let specialty;
        // Specialty creation
        specialty = new Specialty(req.body);

        await specialty.save();
        res.send(specialty);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
 
//Specialty  agregate project
exports.getSpecialtiesAgregateproject = async (req, res) => {

    try {
        //de usuarios con roles 
        const specialtiesagregate = await Specialty.aggregate([
                {
                $project:
                        {

                        }
            }
        ]); 
        res.json(specialtiesagregate)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}
//usuarios con roles agregate lookup
exports.getSpecialtiesAgregatelookup = async (req, res) => {

    try {
        //de usuarios con especialidades
        const specialtiesagregate = await Specialty.aggregate([
                {
                   $lookup:
                      {

                     }
                }
  
        ]); 
        res.json(specialtiesagregate)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
 
exports.getSpecialties = async (req, res) => {

    try {

        const specialties = await Specialty.find();
        res.json(specialties)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateSpecialty = async (req, res) => {

    try {
        const { id, name, status, updated_date} = req.body;
        let specialty = await Specialty.findById(req.params.id);

        if(!specialty) {
            res.status(404).json({ msg: 'Specialty does not exist' })
        }

        specialty.id = id;
        specialty.name = name;
        specialty.status = status;
        specialty.updated_date = updated_date;

        specialty = await Specialty.findOneAndUpdate({ _id: req.params.id },
                                                    specialty, { new: true} )
        res.json(specialty);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.getSpecialty = async (req, res) => {

    try {
        let specialty = await Specialty.findById(req.params.id);

        if(!specialty) {
            res.status(404).json({ msg: 'Specialty does not exist' })
        }
       
        res.json(specialty);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteSpecialty = async (req, res) => {

    try {
        let specialty = await Specialty.findById(req.params.id);

        if(!specialty) {
            res.status(404).json({ msg: 'specialty does not exist' })
        }
       
        await Specialty.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Specialty successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
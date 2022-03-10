const Role = require("../src/models/Role");


exports.createRole = async (req, res) => {

    try {
        let role;
        // Role creation
        role = new Role(req.body);

        await role.save();
        res.send(role);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
 //Role aggregate match status false
exports.RolesMatchF = async (req, res) => {

    try {
         
        const rolesAgregate = await Role.aggregate([
                {
                   $match:
                      {
                        status:false,

                      }
                }
 
        ]); 
        res.json(rolesAgregate)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
 //Role aggregate match status true
 exports.RolesMatchT = async (req, res) => {

    try {
         
        const rolesAgregate = await Role.aggregate([
                {
                   $match:
                      {
                        status:true,

                      }
                }
 
        ]); 
        res.json(rolesAgregate)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
exports.getRoles = async (req, res) => {

    try {

        const roles = await Role.find();
        res.json(roles)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateRole = async (req, res) => {

    try {
        const { role_name, status, updated_date} = req.body;
        let role = await Role.findById(req.params.id);

        if(!role) {
            res.status(404).json({ msg: 'Role does not exist' })
        }

        role.role_name = role_name;
        role.status = status;
        role.updated_date = updated_date;

        role = await Role.findOneAndUpdate({ _id: req.params.id },role, { new: true} )
        res.json(role);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.getRole = async (req, res) => {

    try {
        let role = await Role.findById(req.params.id);

        if(!role) {
            res.status(404).json({ msg: 'Role does not exist' })
        }
       
        res.json(role);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteRole = async (req, res) => {

    try {
        let role = await Role.findById(req.params.id);

        if(!role) {
            res.status(404).json({ msg: 'role does not exist' })
        }
       
        await Role.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Role successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
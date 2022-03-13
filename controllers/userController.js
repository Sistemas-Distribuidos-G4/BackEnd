const User = require("../models/User");
const bcrypt = require("bcrypt");



exports.createUser = async (req, res) => {

    try {
        let user;
        // User creation
        user = new User(req.body);
        user.password = await User.encryptPassword(user.password);
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 
 
//user get con find 
exports.getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.json(users)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
//user  agregate project
exports.UsersProject = async (req, res) => {

    try {
  
        const usersagregate = await User.aggregate([
                {
                $project:
                        {
                            _id:0,
                        username:1,
                        name:1,
                        last_name:1,
            

                        }
            }
        ]); 
        res.json(usersagregate)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}
//user con roles agregate lookup
exports.UsersLookupRoles = async (req, res) => {

    try {
        
        const usersagregate = await User.aggregate([
                {
                   $lookup:
                      {
                         from: "roles",
                         localField: "role",
                         foreignField: "_id",
                         as: "Rol de usuario"
                     }
                }
  
        ]); 
        res.json(usersagregate)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
//user con specialty agregate lookup
exports.UsersLookupSpecialties = async (req, res) => {

    try {
        
        const usersagregate = await User.aggregate([
                {
                   $lookup:
                      {
                         from: "specialties",
                         localField: "specialty",
                         foreignField: "_id",
                         as: "Especialidad de usuario"
                     }
                }
  
        ]); 
        res.json(usersagregate)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.updateUser = async (req, res) => {

    try {
        const { username, password, name, lastname_p, lastname_m, email, phone, specialty, role , status, created_date, updated_date } = req.body;
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }

        user.username = username;
        user.password = await User.encryptPassword(password);
        user.name = name;
        user.lastname_p = lastname_p;
        user.lastname_m = lastname_m;
        user.email = email;
        user.phone = phone;
        user.specialty = specialty;
        user.role = role;
        user.status = status;
        user.created_date = created_date;
        user.updated_date = updated_date;

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true} )
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.getUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'User successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


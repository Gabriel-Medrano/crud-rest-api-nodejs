
const routesContrl = {};

const User = require('../models/users.model');

routesContrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
}

routesContrl.createUser = async (req,res) => {
    const user = await new User(req.body);
    user.save();
    // console.log(user)
    res.json({ status: "user saved"});
}

routesContrl.getUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.json(user);
}

routesContrl.updateUser = async (req,res) => {
    const {id} = req.params;
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        age: req.body.age,
        phono: req.body.phono
    }
    await User.findByIdAndUpdate(id,{$set: user},{new: true});
    res.json({ status: 'User Updated'});
}

routesContrl.removeUser = async (req,res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "user remove"});
}

// export
module.exports = routesContrl;
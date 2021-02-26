const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: { type: String , required: true },
    surname: {type: String ,  required: true},
    email: { type: String , required: true },
    age: { type: Number , required: true },
    phono: { type: Number , required: true }
})

module.exports = mongoose.model('User',UserSchema);


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalSchema = new Schema({
    firstname:{type: String , required: true},
    surname:{type: String , required: true},
    email:{type: String , required: true},
    phoneNumber:{type: String, required:true},
    dob:{type: Date , required: true}, 
    address:{type: String , required: true},
},{
    timestamps: true,
});

const Personal = mongoose.model('Personal' , personalSchema);

module.exports = Personal;
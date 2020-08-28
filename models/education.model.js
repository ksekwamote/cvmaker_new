const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({
   fieldOfStudy:{type: String , required: true},
    schoolName:{type: String , required: true},
    startDate:{type: String , required: true},
    gradDate:{type: String, required:true},
    
},{
    timestamps: true,
});

const Education = mongoose.model('Education' ,educationSchema);

module.exports = Education;
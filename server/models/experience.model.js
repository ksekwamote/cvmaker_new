const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    employer:{type: String , required: true},
    jobTitle:{type: String , required: true},
    startDate:{type: String , required: true},
    endDate:{type: String, required:true},
    jobObjective:{type: String , required: true},
},{
    timestamps: true,
});

const Experience = mongoose.model('Experience' , experienceSchema);

module.exports = Experience;
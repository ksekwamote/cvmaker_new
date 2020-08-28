const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objectiveSchema = new Schema({
    obj:{type: String , required: true}
    
    
},{
    timestamps: true,
});

const Objective = mongoose.model('Objective' , objectiveSchema);

module.exports = Objective;
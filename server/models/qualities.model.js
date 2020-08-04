const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const qualitiesSchema = new Schema({
    qualities:{type: String , required: true},
    
},{
    timestamps: true,
});

const Qualities = mongoose.model('Qualities' , qualitiesSchema);

module.exports = Qualities;
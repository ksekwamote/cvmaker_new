const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const referenceSchema = new Schema({
    rname:{type: String , required: true},
    roccupation:{type: String , required: true},
    remployer:{type: String , required: true},
    remail:{type: String , required: true},
    rphone:{type: String , required: true}, 
},{
    timestamps: true
});

const Reference = mongoose.model('Reference' , referenceSchema);

module.exports = Reference;
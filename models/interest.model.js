const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interestSchema = new Schema({
    interest:{type: String , required: true}
    
},{
    timestamps: true,
});

const Interest = mongoose.model('Interest' , interestSchema);

module.exports = Interest;
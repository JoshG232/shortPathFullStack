//Models are used that tell us how the data should be stored
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nameM:{ type: String },
    weight : {type: String},
}, {
  timestamps: true,
});

mongoose.models = {}

module.exports = mongoose.model('Map', userSchema);
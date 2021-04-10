//Models are used that tell us how the data should be stored
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{ type: String },
    routeName : {type: String},
    distance : {type: String},
    path : {type: Array},
}, {
  timestamps: true,
});

mongoose.models = {}

module.exports = mongoose.model('Map', userSchema);

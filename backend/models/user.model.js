//Models are used that tell us how the data should be stored
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

mongoose.models = {}

module.exports = mongoose.model('User', userSchema);
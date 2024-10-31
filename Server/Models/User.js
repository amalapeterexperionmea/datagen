
const mongoose = require('mongoose');

//  Mongoose schema for the User collection
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema, 'User'); 

module.exports = User;

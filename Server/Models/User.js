
const mongoose = require('mongoose');

//  Mongoose schema for the User collection
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username:{type: String, required: true ,unique: true },
  user_type:{type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema, 'User'); 

module.exports = User;

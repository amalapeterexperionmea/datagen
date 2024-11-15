const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String},
  domain: { type: String, required: true },
  postgres: { type: String,required: true },
  mongodb: { type: String,required: true },
});

const Client = mongoose.model('Client', clientSchema, 'Client'); 

module.exports = Client;

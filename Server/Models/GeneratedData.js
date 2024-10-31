
const mongoose = require('mongoose');


const generatedDataSchema = new mongoose.Schema({
 
  dataField1: { type: String, required: true },
  dataField2: { type: Number, required: true },
  
});

const GeneratedData = mongoose.model('GeneratedData', generatedDataSchema, 'GeneratedData'); 

module.exports = GeneratedData;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// MongoDB connection
mongoose.connect('mongodb+srv://admin:experion1234@datagen.ypvo3.mongodb.net/generator?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Define the Mongoose schema
const generatedDataSchema = new mongoose.Schema({
  organizationuri: String,
  fromdate: Date,
  todate: Date,
  includeweekends: Boolean,
  fromtime: String,
  totime: String,
  duration: {
    min: Number,
    max: Number
  },
  generationmode: String,
  modeattributes: {
    daily: {
      daupercent: {
        min: Number,
        max: Number
      }
    },
    bulk: {
      batchsize: Number,
      noofrecords: Number
    }
  }
});

// Create the model
const GeneratedData = mongoose.model('GeneratedData', generatedDataSchema, 'Generated_Data');

// API endpoint to generate data
app.post('/api/generate', async (req, res) => {
  try {
    const newData = new GeneratedData(req.body);
    await newData.save();
    res.status(201).send(newData); // Return the created object
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).send({ error: 'Failed to generate data', details: error.message });
  }
});

// API endpoint to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    const data = await GeneratedData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send({ error: 'Failed to fetch data', details: error.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

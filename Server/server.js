
const express = require('express');
const cors = require('cors');
const connectDB = require('./Db'); 
const User = require('./Models/User'); 
const GeneratedData = require('./Models/GeneratedData'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

//  login API
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }

    if (user.password !== password) { 
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: 'Internal server error', details: error.message });
  }
});




// API  data generation
app.post('/api/generate', async (req, res) => {
  try {
    const newData = new GeneratedData(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ error: 'Failed to generate data', details: error.message });
  }
});


app.get('/api/data', async (req, res) => {
  try {
    const data = await GeneratedData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

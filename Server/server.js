const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://admin:experion1234@datagen.ypvo3.mongodb.net/generator?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the Mongoose schema for the User collection
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema, 'User'); // Ensure collection name matches

// API endpoint to validate user login
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

//  API endpoint for data generation
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

// API endpoint to fetch data from MongoDB
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

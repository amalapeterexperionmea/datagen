
const express = require('express');
const User = require('../models/User'); 
const GeneratedData = require('../models/GeneratedData'); 

const router = express.Router();

// Login API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid Credentials!' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: 'Internal server error', details: error.message });
  }
});

// Data generation API
router.post('/generate', async (req, res) => {
  try {
    const newData = new GeneratedData(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ error: 'Failed to generate data', details: error.message });
  }
});

// Fetch data API
router.get('/data', async (req, res) => {
  try {
    const data = await GeneratedData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
});

module.exports = router;

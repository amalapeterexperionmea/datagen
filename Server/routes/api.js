const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const clientController = require('../controllers/clientController')






// Login API
router.post('/login', loginController.login);
//create client API
router.post('/addclient',clientController.addclient);







module.exports = router;


























// const GeneratedData = require('../models/GeneratedData'); 
// Data generation API
// router.post('/generate', async (req, res) => {
//   try {
//     const newData = new GeneratedData(req.body);
//     await newData.save();
//     res.status(201).json(newData);
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(400).json({ error: 'Failed to generate data', details: error.message });
//   }
// });

// Fetch data API
// router.get('/data', async (req, res) => {
//   try {
//     const data = await GeneratedData.find();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Failed to fetch data', details: error.message });
//   }
// });




const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


// Connect to MongoDB
const connectDB = require('./db'); 
connectDB();

// Define routes
const apiRouter = require('./routes/api');
app.use(apiRouter);




module.exports = app;

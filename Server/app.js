
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); 

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

module.exports = app;

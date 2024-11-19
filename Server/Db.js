
const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = 'mongodb+srv://admin:experion1234@datagen.ypvo3.mongodb.net/generator?retryWrites=true&w=majority';


//  connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};

module.exports = connectDB; 

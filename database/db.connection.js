const mongoose = require('mongoose');
require('dotenv').config();

const atlasURL = process.env.ATLAS_URL

const connectDB = async () => {
    try {
        await mongoose.connect(atlasURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      process.exit(1); // Exit the application on connection error
    }
  };
  
  module.exports = connectDB;
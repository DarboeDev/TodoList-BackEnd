const mongoose = require('mongoose');

const url = "mongodb+srv://darboedev:12345@cluster0.5qsnpui.mongodb.net/";

const connectDB = async () => {
  return await mongoose.connect(url)
  try {
    await mongoose.connect(url)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

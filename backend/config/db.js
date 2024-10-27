
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://sachindr:sachin@sachin.cjikv.mongodb.net/categorization_app", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

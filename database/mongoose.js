const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/events_db");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
module.exports = connectToDB;

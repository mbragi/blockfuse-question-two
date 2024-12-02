const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gem:gem@cluster0.x2hptvd.mongodb.net/sample"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
module.exports = connectToDB;

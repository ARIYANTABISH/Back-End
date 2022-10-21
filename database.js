const mongoose = require("mongoose");

const URL =
  "";

const connection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB is successfull");
  } catch (error) {
    console.log("error while connecting with the database");
  }
};

module.exports = connection;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const db = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("running");
  } catch (e) {
    console.log(e);
  }
};
module.exports = db;

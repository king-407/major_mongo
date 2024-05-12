const mongoose = require("mongoose");
const busSchema = mongoose.Schema({
  source: {
    type: String,
  },
  destination: {
    type: String,
  },
  bus_id: {
    type: String,
  },
  bus_name: {
    type: "String",
  },
  seats: {
    type: Number,
  },
});

module.exports = mongoose.model("Bus", busSchema);

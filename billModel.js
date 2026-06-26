const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  flatNo: {
    type: String,
    required: true,
  },
  resident: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Bill", billSchema);
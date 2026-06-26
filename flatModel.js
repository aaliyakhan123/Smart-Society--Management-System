const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
  flatNo: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Occupied",
  },
});

module.exports = mongoose.model("Flat", flatSchema);
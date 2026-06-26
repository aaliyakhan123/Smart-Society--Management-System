const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  flatNo: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Owner",
  },
});

module.exports = mongoose.model(
  "Resident",
  residentSchema
);
const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  resident: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Visitor", visitorSchema);
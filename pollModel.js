const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("Poll", pollSchema);
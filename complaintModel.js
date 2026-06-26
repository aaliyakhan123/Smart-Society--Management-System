const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  resident: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Complaint", complaintSchema);
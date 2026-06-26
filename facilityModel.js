const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Available",
  },
});

module.exports = mongoose.model("Facility", facilitySchema);
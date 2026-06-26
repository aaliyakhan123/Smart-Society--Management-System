
const Facility = require("../models/facilityModel");

const getFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.json(facilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFacility = async (req, res) => {
  try {
    const facility = await Facility.create(req.body);
    res.json(facility);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFacility = async (req, res) => {
  try {
    await Facility.findByIdAndDelete(req.params.id);

    res.json({
      message: "Facility Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFacilities,
  addFacility,
  deleteFacility,
};

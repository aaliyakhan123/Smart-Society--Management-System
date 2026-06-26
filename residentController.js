const Resident = require("../models/Resident");

const getResidents = async (req, res) => {
  try {
    const residents = await Resident.find();
    res.json(residents);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addResident = async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    res.json(resident);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteResident = async (req, res) => {
  try {
    await Resident.findByIdAndDelete(req.params.id);

    res.json({
      message: "Resident Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getResidents,
  addResident,
  deleteResident,
};
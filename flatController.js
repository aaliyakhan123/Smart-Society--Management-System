const Flat = require("../models/flatModel");

const getFlats = async (req, res) => {
  try {
    const flats = await Flat.find();
    res.json(flats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFlat = async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    res.json(flat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFlat = async (req, res) => {
  try {
    await Flat.findByIdAndDelete(req.params.id);

    res.json({
      message: "Flat Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFlats,
  addFlat,
  deleteFlat,
};
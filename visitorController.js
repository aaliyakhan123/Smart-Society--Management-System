const Visitor = require("../models/visitorModel");

const getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.create(req.body);
    res.json(visitor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteVisitor = async (req, res) => {
  try {
    await Visitor.findByIdAndDelete(req.params.id);

    res.json({
      message: "Visitor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getVisitors,
  addVisitor,
  deleteVisitor,
};
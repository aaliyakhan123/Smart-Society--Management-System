const Complaint = require("../models/complaintModel");

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.json(complaint);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);

    res.json({
      message: "Complaint Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getComplaints,
  addComplaint,
  deleteComplaint,
};
const Resident = require("../models/Resident");
const Visitor = require("../models/visitorModel");
const Complaint = require("../models/complaintModel");
const Bill = require("../models/billModel");
const Notice = require("../models/noticeModel");
const Facility = require("../models/facilityModel");
const Flat = require("../models/flatModel");
const Poll = require("../models/pollModel");

const getDashboardData = async (req, res) => {
  try {
    const residents = await Resident.countDocuments();
    const visitors = await Visitor.countDocuments();
    const complaints = await Complaint.countDocuments();
    const bills = await Bill.countDocuments();
    const notices = await Notice.countDocuments();
    const facilities = await Facility.countDocuments();
    const flats = await Flat.countDocuments();
    const polls = await Poll.countDocuments();

    res.json({
      residents,
      visitors,
      complaints,
      bills,
      notices,
      facilities,
      flats,
      polls,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
};
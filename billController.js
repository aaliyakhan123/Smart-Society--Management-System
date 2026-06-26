const Bill = require("../models/billModel");

const getBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addBill = async (req, res) => {
  try {
    const bill = await Bill.create(req.body);
    res.json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBill = async (req, res) => {
  try {
    await Bill.findByIdAndDelete(req.params.id);

    res.json({
      message: "Bill Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBills,
  addBill,
  deleteBill,
};
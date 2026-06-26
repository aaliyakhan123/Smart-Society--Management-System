const Poll = require("../models/pollModel");

const getPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addPoll = async (req, res) => {
  try {
    const poll = await Poll.create(req.body);
    res.json(poll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePoll = async (req, res) => {
  try {
    await Poll.findByIdAndDelete(req.params.id);

    res.json({
      message: "Poll Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPolls,
  addPoll,
  deletePoll,
};
const Notice = require("../models/noticeModel");

const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.json(notice);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);

    res.json({
      message: "Notice Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getNotices,
  addNotice,
  deleteNotice,
};
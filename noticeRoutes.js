const express = require("express");

const {
  getNotices,
  addNotice,
  deleteNotice,
} = require("../controllers/noticeController");

const router = express.Router();

router.get("/", getNotices);

router.post("/", addNotice);

router.delete("/:id", deleteNotice);

module.exports = router;
const express = require("express");

const {
  getPolls,
  addPoll,
  deletePoll,
} = require("../controllers/pollController");

const router = express.Router();

router.get("/", getPolls);
router.post("/", addPoll);
router.delete("/:id", deletePoll);

module.exports = router;
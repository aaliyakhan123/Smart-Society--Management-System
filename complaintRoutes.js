const express = require("express");

const {
  getComplaints,
  addComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

router.get("/", getComplaints);

router.post("/", addComplaint);

router.delete("/:id", deleteComplaint);

module.exports = router;
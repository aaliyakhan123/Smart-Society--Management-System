const express = require("express");

const {
  getVisitors,
  addVisitor,
  deleteVisitor,
} = require("../controllers/visitorController");

const router = express.Router();

router.get("/", getVisitors);

router.post("/", addVisitor);

router.delete("/:id", deleteVisitor);

module.exports = router;
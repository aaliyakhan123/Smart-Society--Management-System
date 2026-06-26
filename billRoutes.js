const express = require("express");

const {
  getBills,
  addBill,
  deleteBill,
} = require("../controllers/billController");

const router = express.Router();

router.get("/", getBills);

router.post("/", addBill);

router.delete("/:id", deleteBill);

module.exports = router;
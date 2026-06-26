const express = require("express");

const {
  getResidents,
  addResident,
   deleteResident,
} = require("../controllers/residentController");

const router = express.Router();

router.get("/", getResidents);
router.post("/", addResident);
router.delete("/:id", deleteResident);
module.exports = router;
const express = require("express");

const {
  getFacilities,
  addFacility,
  deleteFacility,
} = require("../controllers/facilityController");

const router = express.Router();

router.get("/", getFacilities);

router.post("/", addFacility);

router.delete("/:id", deleteFacility);

module.exports = router;
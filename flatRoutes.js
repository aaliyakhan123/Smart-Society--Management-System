const express = require("express");

const {
  getFlats,
  addFlat,
  deleteFlat,
} = require("../controllers/flatController");

const router = express.Router();

router.get("/", getFlats);
router.post("/", addFlat);
router.delete("/:id", deleteFlat);

module.exports = router;
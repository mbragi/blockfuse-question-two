const express = require("express");
const Event = require("../models/event.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json({ success: true, data: events });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

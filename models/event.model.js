const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  type: { type: String, required: true },
  payload: { type: Object, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
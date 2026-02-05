const mongoose = require("mongoose");

const anniversarySchema = new mongoose.Schema({
  coupleName: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Anniversary", anniversarySchema);

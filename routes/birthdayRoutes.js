const express = require("express");
const router = express.Router();
const Birthday = require("../models/Birthday");

/* CREATE */
router.post("/", async (req, res) => {
  try {
    const birthday = await Birthday.create(req.body);
    res.json(birthday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* GET ALL */
router.get("/", async (req, res) => {
  const birthdays = await Birthday.find().sort({ createdAt: -1 });
  res.json(birthdays);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Birthday = require("../models/Birthday");

// GET all birthdays
router.get("/", async (req, res) => {
  const data = await Birthday.find();
  res.json(data);
});

// ADD birthday
router.post("/", async (req, res) => {
  const newBirthday = new Birthday(req.body);
  await newBirthday.save();
  res.json(newBirthday);
});

// DELETE birthday
router.delete("/:id", async (req, res) => {
  await Birthday.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// UPDATE birthday
router.put("/:id", async (req, res) => {
  const updated = await Birthday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;

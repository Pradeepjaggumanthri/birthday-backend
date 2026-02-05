require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const birthdayRoutes = require("./routes/birthdayRoutes");
const anniversaryRoutes = require("./routes/anniversaryRoutes"); // ✅ IMPORTANT

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// Routes
app.use("/api/birthdays", birthdayRoutes);
app.use("/api/anniversaries", anniversaryRoutes); // ✅ Now works

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

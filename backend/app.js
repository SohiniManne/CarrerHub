// backend/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("./models/user"); // just load the model once

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect DB once
sequelize.authenticate()
  .then(() => {
    console.log("✅ MySQL connected successfully!");
    return sequelize.sync({ alter: true }); // sync tables after connect
  })
  .then(() => console.log("✅ All models synced!"))
  .catch((err) => console.error("❌ DB connection error:", err));

module.exports = app;

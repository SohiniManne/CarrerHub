const express = require("express");
const router = express.Router();
const InternshipController = require("../controllers/internshipController");
const authMiddleware = require("../middleware/authMiddleware");

// Public: get all internships
router.get("/", InternshipController.getAll);

// Employees/Admins: create internship
router.post("/", authMiddleware(["employee", "admin"]), InternshipController.create);

module.exports = router;

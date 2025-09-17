const express = require("express");
const router = express.Router();
const ReferralController = require("../controllers/referralController");
const authMiddleware = require("../middleware/authMiddleware");

// Student: apply
router.post("/", authMiddleware("student"), ReferralController.create);

// Student: view their referrals
router.get("/:studentId", authMiddleware("student"), ReferralController.getByStudent);

// Employee/Admin: update referral status
router.put("/:id/status", authMiddleware(["employee", "admin"]), ReferralController.updateStatus);

module.exports = router;

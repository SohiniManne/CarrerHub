const db = require("../config/db");

// Student: apply (create referral)
exports.create = async (req, res) => {
  const { internship_id, student_id, referrer_id } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO referrals (internship_id, student_id, referrer_id, status) VALUES (?, ?, ?, ?)",
      [internship_id, student_id, referrer_id, "pending"]
    );

    res.status(201).json({
      id: result.insertId,
      internship_id,
      student_id,
      referrer_id,
      status: "pending",
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating referral", error: err });
  }
};

// Student: view their referrals
exports.getByStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    const [rows] = await db.query(
      `SELECT r.id, i.title, i.company, r.status
       FROM referrals r
       JOIN internships i ON r.internship_id = i.id
       WHERE r.student_id = ?`,
      [studentId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Error fetching referrals", error: err });
  }
};

// Employee/Admin: update referral status
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await db.query("UPDATE referrals SET status = ? WHERE id = ?", [status, id]);
    res.json({ message: "Referral status updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating referral status", error: err });
  }
};

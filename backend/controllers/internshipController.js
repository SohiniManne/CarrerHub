const db = require("../config/db");

// GET all internships
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM internships");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Error fetching internships", error: err });
  }
};

// CREATE new internship
exports.create = async (req, res) => {
  const { title, company, domain, location, description } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO internships (title, company, domain, location, description) VALUES (?, ?, ?, ?, ?)",
      [title, company, domain, location, description]
    );
    res.status(201).json({ id: result.insertId, title, company, domain, location, description });
  } catch (err) {
    res.status(500).json({ message: "Error creating internship", error: err });
  }
};

const db = require("../config/database");

exports.getEmployees = (req, res) => {
  const paged = req.query.paged === "true";

  const sql = paged
    ? "SELECT id, name, department, status FROM employees LIMIT 10"
    : "SELECT id, name, department, status FROM employees";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(results);
  });
};

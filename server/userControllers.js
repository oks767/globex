const pool = require('./db');
exports.getUsers = async (req, res) => {
    try {
      const result = await pool.query('SELECT fullname, position_date, id AS system_id FROM users');
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
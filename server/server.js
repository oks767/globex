const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'websoft',
  password: 'root',
  port: 5432,
});

const query = (text, params) => pool.query(text, params);

async function testConnection() {
  try {
    const result = await query("SELECT * FROM users");
    console.log(result, result.rows[0].now);
  } catch (err) {
    console.error("Error connecting to the database", err);
  } finally {
    await pool.end();
  }
}

testConnection();

    
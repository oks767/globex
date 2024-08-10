const { Pool } = require('pg');
const express = require('express');

const app = express()
const router = express.Router()



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
    let result = await query("SELECT * FROM users");
    console.log(result);
    
  } catch (err) {
    console.error("Error connecting to the database", err);
  } finally {
    await pool.end();
  }
  
}

testConnection()

 
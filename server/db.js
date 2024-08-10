const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'websoft',
    password: 'root',
    port: 5432,
  });
  
module.exports = pool;
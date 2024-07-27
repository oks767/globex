const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'KOMPUKTER\oksana',
  password: '',
  database: 'websoft'
})

app.get('/dbo.data', (req, res) => {
  const sql = 'SELECT id FROM dbo.data'
  db.query(sql, (err, data) => {
    if (err) console.log(res.json(err)); 
      console.log(res.json(data));
  })
})

app.listen(3000, () => {
  console.log('listening');
})
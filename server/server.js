const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user1',
  password: 'user1',
  database: 'websoft',
  port: 80
  
})
db.connect()

const id = 

app.get('/websoft', (req, res) => {
  db.query('SELECT id FROM Table_1', function(error, results, fields) {
    if (error) throw error
    return res.json(results)
  })
})
app.listen(80, () => {
  console.log('listening');
})
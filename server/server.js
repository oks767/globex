const express = require('express');
const routes = require('./index');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost'
app.use(express.json());

app.use(cors())
app.use('/api', routes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(port, () => {
  console.log(`Server is running on ${host}:${port}`);
});
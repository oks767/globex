const express = require('express');
const routes = require('./index');
const app = express()

app.use(express.json());


app.use('/api', routes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
 
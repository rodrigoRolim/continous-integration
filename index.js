const express = require('express');

const app = express();
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;
const express = require('express');
const path = require('path')
const config = require('./config');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use((err, req, res, next) => {
  console.log("An error occurred: ", err);
  res.status(500).send("An error occurred");
})

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
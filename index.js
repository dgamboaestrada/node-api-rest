const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('GET request');
  console.log(req);
});

app.post('/', function (req, res) {
  res.send('POST request');
  console.log('>>>>>>>>>>HEADERS:');
  console.log(req.headers);
  console.log('>>>>>>>>>>Body:');
  console.log(req.body);
});

app.listen(4000, () => {
 console.log('The server is running in the port: 4000');
});

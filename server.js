const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist'));

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'charming_catalog',
  password: process.env.PASSWORD,
  database: 'charming_catalog',
});

connection.connect(function (err) {
  if (err) throw err;
  con.query(
    'insert into test values ("hello")',
    function (err, result, fields) {
      if (err) throw err;
      console.log(result, fields);
    }
  );
  con.query('SELECT * FROM testtable', function (err, result, fields) {
    if (err) throw err;
    console.log(result, fields);
  });

  console.log('Connected to the MySQL server.');
});

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.get('/api', (req, res) => res.send('hello'));

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`App running on: http://localhost:${port}`)
);

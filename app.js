const path = require('path');
const { dirname } = require('path');
var express=require('express');
const app = express()
const port = 3000
var mysql = require('mysql');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}))


var connection = mysql.createConnection({
  host: 'db',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'DB'
});

var obj = {};

app.get('/index', function (req, res) {

  connection.query('SELECT * FROM  personnage', function (err, result) {
    if (err) {

      throw err;

    } else {

      obj = { print: result };

      res.render('index', obj);

      console.log(result);

    }

  });

});
app.listen(3000);
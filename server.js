var express = require('express')
var path = require('path')
var fs = require("fs");
var _ = require("lodash")
const port = 3000;
const app = express();
const HttpStatus = require('http-status-codes');
app.use(express.static('./src/assets/images'));
app.use(express.static('./build'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});


// Auth0 documentation will need to mess with later
// routes/index.js
var db = require("../models");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(db)
  console.log("hi")
  res.render('index', { title: 'Auth0 Webapp sample Nodejs' });
});

module.exports = router;
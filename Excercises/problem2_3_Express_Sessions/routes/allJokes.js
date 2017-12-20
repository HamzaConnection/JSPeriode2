var express = require('express');
var router = express.Router();

var methods = require('../model/jokes');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('allJokes.hbs', {jokes: 'Here is all of the jokes: ' + methods.allJokes()});
});

module.exports = router;



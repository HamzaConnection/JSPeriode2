var express = require('express');
var router = express.Router();

var methods = require('../model/jokes');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('randomJoke.hbs', {joke: 'Here is your random joke: ' + methods.getRandomJoke()});
  
});

module.exports = router;



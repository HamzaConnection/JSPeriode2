var express = require('express');
var router = express.Router();

var session = require('express-session');
var methods = require('../model/jokes');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Joke App Welcome: ' , session: req.session.userName});
});

module.exports = router;;

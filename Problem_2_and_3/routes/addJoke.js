var express = require('express');
var router = express.Router();

var methods = require('../model/jokes');

router.get('/', function(req, res, next) {
  res.render('addJoke.hbs', {jokes: methods.allJokes()});
})

router.post('/', function(req, res, next) {
  methods.addJoke(req.body.newJoke);
  res.redirect("/addJoke");
})

module.exports = router;
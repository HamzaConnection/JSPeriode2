var express = require('express');
var router = express.Router();
var session = require('express-session');

router.get('/', function(req, res, next) {
  res.render('login.hbs', {title: "Welcome to the Joke App", 'session': req.session.userName});
});

router.get('/', function(req, res, next){
  res.redirect("index");
  console.log('Post');
  console.log('session object ' + req.session.userName);
});


module.exports = router;

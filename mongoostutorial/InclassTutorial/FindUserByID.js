require('./connection');

var User = require('../models/users');



User.findById("5a40e74f5fe9fa7c0aad69da", function(err, user) {
    if (err) throw err;
  
    // show the one user
    console.log(user);
  });
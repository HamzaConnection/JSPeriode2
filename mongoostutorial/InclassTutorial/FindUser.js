

require('./connection');

var User = require('../models/users');

// get the user starlord55
User.find({ username: 'sevilayha' }, function(err, user) {
    if (err) throw err;
  
    // object of the user
    console.log(user);
  });

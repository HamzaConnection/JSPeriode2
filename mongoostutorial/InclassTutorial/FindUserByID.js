require('./connection');

var User = require('../models/users');


// get a user with ID of 1
User.findById("59cb62c7bb2967165a06cb1e", function(err, user) {
    if (err) throw err;
  
    // show the one user
    console.log(user);
  });
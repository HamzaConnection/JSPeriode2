require('./connection');

var User = require('../models/users');

// get a user with ID of 59cb62c7bb2967165a06cb1e remember to change this depending on the user
User.findById('59cb62c7bb2967165a06cb1e', function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});
require('./connection');

var User = require('../models/users');

// get a user with ID of 5a40d8c31fd2ef7840e994f0 remember to change this depending on the user
User.findById('5a40e74f5fe9fa7c0aad69da', function(err, user) {
  if (err) throw err;

  // change the user's location
  user.location = 'uk';
  
  // sets the user to admin
  user.admin = true;
  user.username = 'Hamza'

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});
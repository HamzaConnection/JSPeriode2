// find the user by username and delete him

require('./connection');

var User = require('../models/users');

User.findOneAndRemove({ username: 'sevilayha' }, function(err) { // can also use name etc
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });
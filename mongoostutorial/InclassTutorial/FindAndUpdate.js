// find the user starlord55
// update him to starlord 88
require('./connection');

var User = require('../models/users');

User.findOneAndUpdate({ username: 'sevilayha' }, { username: 'starlord88' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log('User succesfully updated');
  });
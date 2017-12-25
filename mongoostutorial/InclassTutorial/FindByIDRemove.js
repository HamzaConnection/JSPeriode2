require('./connection');

var User = require('../models/users');

User.findByIdAndRemove({ _id: '5a40d8c31fd2ef7840e994f0' } , function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });
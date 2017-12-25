
require('./connection');

var User = require('../models/users');

User.findByIdAndUpdate({ _id: '5a40e4494d89ea7ab5696115' } , { name: 'Chris' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
  });
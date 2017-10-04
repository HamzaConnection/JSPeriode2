// find the user by username and delete him
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });
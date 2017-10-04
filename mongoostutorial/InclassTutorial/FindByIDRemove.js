// find the user with id 4
User.findByIdAndRemove(4, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });
// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate(4, { username: 'starlord88' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
  });
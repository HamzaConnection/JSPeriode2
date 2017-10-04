var mongoose = require("mongoose");
var mongoURI = 'mongodb://HamzaConnection:5800-hlm@ds151014.mlab.com:51014/hamzaconnection'; 
// normally you wouldn't have the password to your db here but on a file that you don't commit.
mongoose.connect(mongoURI,{useMongoClient:true});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + mongoURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

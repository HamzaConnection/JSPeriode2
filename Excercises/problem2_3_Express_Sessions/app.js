var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var index = require('./routes/index');
var randomJoke = require('./routes/randomJoke');
var allJokes = require('./routes/allJokes');
var addJoke = require('./routes/addJoke');
var login = require('./routes/login');
var session = require("express-session");
//var helmet = require('helmet');

 
var app = express();

//app.use(helmet())


app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));
// SaveUninitialized : Forces a session that is "uninitialized" to be saved to the store. 
// a session is uninitialized when it is new but not modified.
// Resave : Forces the session to be saved back to the session store, even if the session was never modified during the request
// 
// this is only for development purposes in the real world we would have set the password on
// a seperate file or make an envirment variable 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // remember when you use logger you won't be able to see it once you deploy to a server
// The best way to solve this is to create a logfile.txt with all the logs.
app.use(logger('combined', {stream: fs.createWriteStream('./logFile.txt', {flag:'a'})}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// __dirname gives you your current directory

// remember order matters 
app.use(function (req, res, next) {
  if(req.session.userName)
  {
    console.log("username found in session");
    var userName = req.session.userName;
    return next();

    
  } else if (req.body.userName){
    req.session.userName = req.body.userName
    res.redirect('/index')
  } else {
    req.url = '/'
    return next();
  }
});

app.use('/index', index);
app.use('/randomJoke', randomJoke);
app.use('/allJokes', allJokes);
app.use('/addJoke', addJoke);
app.use('/', login); 



  




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

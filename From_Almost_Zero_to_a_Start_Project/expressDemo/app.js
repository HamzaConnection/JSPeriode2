var express = require('express');
var app = express();
var routes = require('./routes/index');



var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
app.set('view engine', 'jade');//allow us to leave out the extension
app.set('views', path.join(__dirname, 'views'));//Actually the default view folder

app.use(logger('dev'));
//parse application/x-www-form-urlencoded
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
//app.use(express.static(path.join(__dirname, 'public'))); // this makes express use the html page in the public folder





app.use('/', routes); 
/*
app.get('/', function(req, res){
    res.render('index', { title: 'Express' });    
});
//app.listen(3000);
*/


  
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.stack + "</p>");
  
    });
  }
  //Will not print stacktrace
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>");
  });
  

  var names = [];
  app.get('/form', function (req, res) {
    //res.send("Hi: "+names.join(",")+"<form method='post'><input name='name'></form>");
    res.render('form', { data:"hey: "+names.join(",")});
    
    
  });
  
  app.post('/form', function (req, res) {
    names.push(req.body.name);
    res.redirect('/form');
  });
  
  app.post('/names', function (req, res) {
    names.push(req.body); //We receive it as a JavaScript object
    console.log(JSON.stringify(req.body)); 
    res.redirect('/form');
  });
  
  
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
    res.render('error', { message: 'Express Error' + err});   
  });
  

module.exports= app;

var express = require('express');
var app = express();
var port = 1337;
var path = require('path');
// Configure app 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Use middleware

// Define routes
//define routes with methods named after HTTP methods
// - app.get()
// - app.post()
// - app.put()
// - app.del()


app.get("/", function (req, res) {
    res.render('index');
})
app.listen(port, function () {
    console.log("ready on port " + port)
});
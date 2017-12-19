var express = require("express");
var app = express();
var path = require('path')
var bodyParser = require("body-parser"); // bodyparser to read params
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
});

//req.params.xxxx
app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {

    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }

    req.calc = calculatorRequest;
    next();

});

app.get("/api/calculator/*", function (req, res) {
    var object = req.calc;
    
    if (object.operation == "add") {

        res.render('index', { title: parseInt(object.n1) + parseInt(object.n2) });
        //res.render(parseInt(req.param.n1) + parseInt(req.param.n2));
    }
    //res.render('index');
});


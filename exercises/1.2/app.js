var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var countGET = 0;
var countGETpizzas = 0;
var countPOSTpizzas = 0;
var countDELETEpizzas = 0;

app.use((req, res, next) => {

    if (req.method == "GET" && req.path == '/') {
        console.log(req.path);
        countGET++;
    }

    if (req.method == "GET" && req.path == "/pizzas") {
        console.log(req.path);
        countPOSTpizzas++;
    }

    if (req.method == "POST" && req.path == "/pizzas") {
        console.log(req.path);
        countPOSTpizzas++;
    }

    if (req.method == "DELETE" && req.path == "/pizzas") {
        console.log(req.path);
        countPOSTpizzas++;
    }

    console.log('-GET / :', countGET);
    console.log('-GET /pizzas :', countGETpizzas);
    console.log('-POST /pizzas :', countPOSTpizzas);
    console.log('-DELETE /pizzas :', countDELETEpizzas);
    next();
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { log } = require('console');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const stats = {};

app.use((req, res, next) => {
const currentOperation  = `- ${req.method} ${req.path}`;
const currentOperationCounter = stats[currentOperation];
if (currentOperationCounter === undefined) stats[currentOperation] = 0;
stats[currentOperation]++;
console.log("Request counter: ");
for(key in stats) {
    console.log(`${key} : ${stats[key]}`);
}
    next();
  });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

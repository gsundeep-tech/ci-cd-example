var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload')

var indexRouter = require('./routes/index');
var audioRouter = require('./routes/audio');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload())

app.use('/', indexRouter);
app.use('/audio', audioRouter);

module.exports = app;

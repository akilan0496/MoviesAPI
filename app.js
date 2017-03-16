var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var movieRoutes = require('./routes/movies');

var userRoutes = require('./routes/users');

var app = express();

//connecting to the database
var connectionString = 'mongodb://localhost:27017/moviesDB';
mongoose.connect(connectionString);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',movieRoutes);

app.use('/api',userRoutes);

module.exports = app;

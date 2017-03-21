var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var movieRoutes = require('./routes/movies');

var userRoutes = require('./routes/users');

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//connecting to the database yes
var connectionString = 'mongodb://localhost:27017/moviesDB';
mongoose.connect(connectionString);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',movieRoutes);

app.use('/api',userRoutes);

module.exports = app;

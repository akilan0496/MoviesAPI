var Movie = require('../models/movies');
var logger  = require('../utils/loggerUtil');

exports.getMovies = function(req, res) {
  console.log("Akilan");
  logger.info("Inside Get Movies method");
  Movie.find(function(err, movies) {
    if (err)
      return res.send(err);
    console.log("movies: "+movies);
    res.json(movies);
  });
};


exports.createMovie = function(req, res) {
  var movie = new Movie(req.body);

  movie.save(function(err) {
    if (err)
      return res.send(err);
    res.send({
      message: 'Movie Added'
    });
  });
};

exports.updateMovie = function(req, res) {
  Movie.findOne({
    _id: req.params.id
  }, function(err, movie) {
    if (err)
      return res.send(err);

    for (prop in req.body) {
      movie[prop] = req.body[prop];
    }

    movie.save(function(err) {
      if (err)
        return res.send(err);
      res.json({
        message: 'Movie Updated'
      });
    });
  });
};

exports.getMovie = function(req, res) {
  Movie.findOne({
    _id: req.params.id
  }, function(err, movie) {
    if (err)
      return res.send(err);
    res.json(movie);
  });
};

exports.deleteMovie = function(req, res) {
  Movie.remove({
    _id: req.params.id
  }, function(err, movie) {
    if (err)
      return res.send(err);
    res.json({
      message: 'Movie Successfully deleted'
    });
  });
};

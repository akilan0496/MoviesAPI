
var MoviesController = require('../controller/MoviesController');
var express = require('express');
var authController = require('../auth');

var router = express.Router();

router.route('/movies').get(MoviesController.getMovies);
//router.route('/movies').get(authController.isAuthenticated,MoviesController.getMovies);

router.route('/movies').post(MoviesController.createMovie);
//router.route('/movies').post(authController.isAuthenticated,MoviesController.createMovie);

router.route('/movies/:id').put(MoviesController.updateMovie);
//router.route('/movies/:id').put(authController.isAuthenticated,MoviesController.updateMovie);

router.route('/movies/:id').get(MoviesController.getMovie);
//router.route('/movies/:id').get(authController.isAuthenticated,MoviesController.getMovie);

router.route('/movies/:id').delete(MoviesController.deleteMovie);
//router.route('/movies/:id').delete(authController.isAuthenticated,MoviesController.deleteMovie);

module.exports = router;

var mangoose = require('mongoose');
var Schema = mangoose.Schema;

var movieSchema = new Schema({
  title: String,
  release: String,
  director: String,
  genre: String
});

module.exports = mangoose.model('movies', movieSchema);

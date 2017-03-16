var bunyan = require('bunyan');

var bunyanOptions = {
  name: 'logger',
  streams: []
};

var logger = bunyan.createLogger(bunyanOptions);
module.exports = logger;

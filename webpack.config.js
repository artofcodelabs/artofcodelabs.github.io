const path = require('path');

module.exports = {
  entry: './_src/index.js',
  module: {
    rules: [

    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets')
  }
};
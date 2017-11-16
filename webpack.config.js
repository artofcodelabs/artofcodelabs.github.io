const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    application: './_src/app.js'
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new CleanWebpackPlugin(['assets'], {
      exclude: [],
      verbose: true,
      dry: false
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets')
  }
};
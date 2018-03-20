const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const postCssOptions = require("./postcss.config.js");

module.exports = {
  entry: {
    vendor: ['baffle', 'loco-js'],
    application: './_src/app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader', options: postCssOptions },
            { loader: 'sass-loader' }
          ]
        })
      },
      { test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          { loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            }
          }
        ]
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['assets'], {
      exclude: [],
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // The order of this array matters
      names: ["common", "vendor"],
      minChunks: 2
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin([{
      from: '_src/images/'
    }])
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets')
  }
};
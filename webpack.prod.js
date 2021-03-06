
const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const common = require('./webpack.common.js');

const styleLoaders = [
  { loader: 'css-loader',
    options: {
      minimize: true
    }
  }
];

const config = merge.smart(common, {
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(sass|scss)$/,
        use: styleLoaders
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          { loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
});

module.exports = config;

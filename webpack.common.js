const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const postCssOptions = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  sourceMap: true,
  plugins: (loader) => [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009'
    })
  ]
}

module.exports = {
  entry: {
    application: './_src/app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.coffee$/,
        use: [
          { loader: 'coffee-loader',
            options: {
              sourceMap: true,
              transpile: {
                presets: ['env']
              }
            }
          }
        ]
      },
      { test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
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
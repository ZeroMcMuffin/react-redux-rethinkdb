'use strict';
var path = require('path');

module.exports = {
  entry: "./web/static/js/index.jsx",
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/, // A regexp to test the require path. accepts either js or jsx
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015-loose', 'react', 'stage-0']
      }
    }]
  },
  resolve: {
    root: path.resolve(__dirname) + '/web/static/js/',
    alias: {
      containers: 'containers',
      actions: 'actions',
      constants: 'constants',
      components: 'components',
      reducers: 'reducers',
      store: 'store'
    },
    extensions: ['', '.js', '.jsx']
  }
};
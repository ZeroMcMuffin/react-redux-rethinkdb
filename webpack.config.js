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
    root: path.resolve(__dirname) + '/web/static/',
    alias: {
      containers: 'js/containers',
      actions: 'js/actions',
      constants: 'js/constants',
      components: 'js/components',
      reducers: 'js/reducers',
      store: 'js/store',
      utils: 'js/utils'
    },
    extensions: ['', '.js', '.jsx']
  }
};
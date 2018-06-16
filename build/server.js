const express = require('express');
const webpack = require('webpack');
// https://github.com/webpack-contrib/webpack-hot-middleware
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.base.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(require('webpack-hot-middleware')(compiler));

// 使用的静态 模板为根目录
app.use(express.static('..'));

// Serve the files on port 3000.
app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n');
});

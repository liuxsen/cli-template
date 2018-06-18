const path = require('path');
const Express = require('express');
const config = require('../config/config');
const app = new Express();

// http 代理
const HttpProxy = require('http-proxy');

const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.dev');
const compiler = Webpack(webpackConfig);

const port = config.port;
const host = config.host;
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
let proxyOptions = {
  target: targetUrl
};
let proxy = HttpProxy.createProxyServer(proxyOptions);
app.use('/api', (req, res) => {
  proxy.web(req, res, { target: targetUrl });
  console.log(`proxy from '/api' to ${targetUrl}`);
});

if (process.env.NODE_ENV !== 'production') {
  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: '/',
      stats: { colors: true },
      lazy: false,
      watchOptions: {
        aggregateTimeout: 300,
        poll: true
      }
    })
  );
  app.use(WebpackHotMiddleware(compiler));
}

app.listen(port, host, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`==> open http://${host}:${port} in a brower to view the app`);
  }
});

console.log(process.env.NODE_ENV);

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack 打包进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 清除打包目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 打开新的web tab
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);
const OUTPUTPATH = resolve('dist');
const isProduction = process.env.NODE_ENV === 'production';
const config = require('./config/config');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: [
      `webpack-hot-middleware/client?path=http://${config.host}:${
        config.port
      }/__webpack_hmr`,
      'babel-polyfill',
      resolve('./app/index.js')
    ],
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: OUTPUTPATH,
    filename: '[name].[hash:8].js'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'app',
      showErrors: true,
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(['dist']),
    new OpenBrowserWebpackPlugin({
      url: `http://${config.host}:${config.port}`
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg)$/,
        use: 'url-loader'
      }
    ]
  }
};

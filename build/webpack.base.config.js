const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const resolve = dir => path.resolve(__dirname, '../', dir);

module.exports = {
  mode: 'development',
  cache: true,
  context: __dirname,
  entry: ['webpack-hot-middleware/client', resolve('./src/main.js')],
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin([resolve('dist')]),
    new HtmlWebpackPlugin({
      title: 'title',
      template: resolve('index.html')
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};

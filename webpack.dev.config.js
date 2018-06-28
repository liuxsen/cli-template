const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 9000
  },
  resolve: {
    // 自动添加后缀
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader']
      }
    ]
  }
};

module.exports = config;

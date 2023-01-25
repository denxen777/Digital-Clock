const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }]
  },
  stats: "errors-only",
  devServer: {
    static: './src'
  }
}
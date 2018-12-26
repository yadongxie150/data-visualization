const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // 避免调用BrowserRouter时，页面刷新报404
  },
  devServer: {
    hot: true, // 热更新
    historyApiFallback: true // 避免调用BrowserRouter时，页面刷新报404
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 加载顺序从右到左
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 配置输出文件名和路径
      template: "./index.html", // html文件的来源
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
      // {
      //   test: /\.vue$/,
      //   use: ['vue-loader']
      // },
      // { 
      //   test: /\.jpeg|jpg|
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}
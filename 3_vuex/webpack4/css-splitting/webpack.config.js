var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  // 변환할 파일의 정보 (시작 파일)
  entry: './app/index.js',
  // 변환된 파일의 정보 (결과 파일)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 변환하면서 적용할 도구들 (비 자바스크립트 파일에 대해서 처리)
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader"
      ]
    }]
  },
  // 변환된 결과에 대해서 추가적인 동작, 기능 수행
  plugins: [
    new MiniCssExtractPlugin()
  ],
}
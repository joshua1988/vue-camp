var path = require('path');

module.exports = {
  mode: 'none', // none, development, production
  entry: './src/index.js', 
  // output: './dist/main.js'
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
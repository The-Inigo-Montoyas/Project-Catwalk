const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
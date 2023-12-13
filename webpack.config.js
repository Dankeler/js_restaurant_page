const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/menu.js',
    another2: './src/contact.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
//  optimization: {
  //  runtimeChunk: 'single',
 // },
  module: {
    rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
    ],
  },
};

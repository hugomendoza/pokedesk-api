const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/main.css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
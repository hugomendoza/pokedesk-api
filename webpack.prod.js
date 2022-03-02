const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  output: {
    assetModuleFilename: 'fonts/[name][ext]',
  },
  plugins: [
    new CssMinimizerPlugin(),
  ],
});
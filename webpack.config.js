const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename:'woneUI.js',
    path:path.resolve(__dirname,'dist'),
    library:'library',
    libraryTarget:"umd"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [new VueLoaderPlugin()],
  optimization:{
    minimizer:[
      new TerserPlugin({
        extractComments:false
      })
    ]
  }
};

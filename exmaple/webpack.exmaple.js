const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { resolve } = require("path");

module.exports = {
  entry: "./exmaple/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool:'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
    template:'./exmaple/index.html'
  })],
  devServer: {
    contentBase:resolve(__dirname,'dist'),
    compress:true,
    port:3000
  }
};

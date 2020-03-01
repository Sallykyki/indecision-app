const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true,
    contentBase: path.join(__dirname, "public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true,
      minify: true
    })
  ]
};

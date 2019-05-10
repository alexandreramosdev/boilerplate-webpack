const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

const dirSrc = path.join(__dirname, "src");
const dirBuild = path.join(__dirname, "Build");
const dirNode = path.join(__dirname, "node_modules");
const entryPoint = path.join(__dirname, "src/javascript/index.js");

module.exports = {
  entry: entryPoint,

  resolve: {
    modules: [dirNode, dirSrc, dirBuild]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          compact: true
        },
        include: path.join(__dirname, "scr/javascript")
      },
      {
        test: /\.(png|jpg|jpeg|svg|woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: isDevelopment ? "[name].[ext]" : "[name].[chunkhash].[ext]",
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader
          },
          { loader: "css-loader", options: { sourceMap: isDevelopment } },
          {
            loader: "postcss-loader",
            options: { sourceMap: isDevelopment, importLoaders: 1 }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ],
        include: path.join(__dirname, "src/scss")
      },
      {
        test: /\.(ejs)$/,
        loader: "compile-ejs-loader"
      }
    ]
  },

  plugins: [
    customHtmlWebpackPlugin({
      filename: "index.html",
      template: "!!compile-ejs-loader!./src/views/pages/index.ejs",
      head: { title: "Home" }
    }),

    customHtmlWebpackPlugin({
      filename: "page2.html",
      template: "!!compile-ejs-loader!./src/views/pages/page2.ejs",
      head: { title: "Page2" }
    }),

    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].[ext]" : "[name].[chunkhash].css",
      chunckFilename: isDevelopment ? "[id].css" : "[id].[chunkhash].css"
    })
  ]
};

function customHtmlWebpackPlugin(specificOptions) {
  const defaults = {
    hash: !isDevelopment,
    minify: {
      removeComments: !isDevelopment,
      collapseWhitespace: !isDevelopment
    }
  };

  return new HtmlWebpackPlugin({ ...defaults, ...specificOptions });
}

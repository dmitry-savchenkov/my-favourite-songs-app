const path = require('node:path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
    output: {
      chunkLoadingGlobal: 'myCustomFunc2',
      path: path.join(__dirname, "../../build"), // the bundle output path
      filename: "songs-list-bundle.js", // the name of the bundle
    },
    devServer: {
      devMiddleware: {
        writeToDisk: true,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/, // .js and .jsx files
          exclude: /node_modules/, // excluding the node_modules folder
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2019"
          }
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
     resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
  };
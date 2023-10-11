const path = require('node:path')

module.exports = {
  entry: './src/index.tsx',
    output: {
      chunkLoadingGlobal: 'myCustomFunc1',
      path: path.join(__dirname, "../../build"), // the bundle output path
      filename: "header-bundle.js", // the name of the bundle
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
          use: ['style-loader', 'css-loader'],
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
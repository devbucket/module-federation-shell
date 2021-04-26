const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const deps = require("./package.json").dependencies;
const { webpack } = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index',

  cache: false,

  output: {
    publicPath: process.env.APP_MAIN_URL,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    // hot: true,
    port: process.env.APP_MAIN_PORT,
    historyApiFallback: true,
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            // env: {
            //   development: {
            //     plugins: [
            //       'react-refresh/babel',
            //     ],
            //   },
            // },
          },
        },
      },
    ],
  },

  plugins: [
    // (ENV === 'development') && new ReactRefreshWebpackPlugin({
    //   exclude: [/node_modules/],
    // }),
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        shell: `shell@${process.env.APP_MAIN_URL}remoteEntry.js`,
        profile: `profile@${process.env.APP_PROFILE_URL}remoteEntry.js`,
      },
      exposes: {
        './App': './src/App',
        './View': './src/components/View'
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ].filter(Boolean),
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],

  target: 'web',
  devServer: {
    port: '3000',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(png | jpg | svg | jpeg)$/,
        type: 'assets/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*', '.scss'],
  },
  mode: 'development',
  watch: true,
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    // minimize: true,
  },
};

module.exports = config;

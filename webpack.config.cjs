const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceType: 'unambiguous',
              presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      ...(isProduction ? [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })] : []),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      port: 3004,
      hot: true,
      historyApiFallback: true, // Important for SPA routing
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};

  const _resolve = require('path').resolve;
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  module.exports = {
    entry: _resolve(__dirname, './src/index.tsx'),
    output: {
      filename: 'bundle.[contenthash].js',
      path: _resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg|webp)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: process.env.NODE_ENV !== 'production',
              },
            },
          ],
        },
        {
          test: /\.(mp3|m4a|wav|ogg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'sounds/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },

      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Real estate website',
        template: _resolve(__dirname, './public/index.html'),
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        openAnalyzer: true,
      }),
    ],
  };

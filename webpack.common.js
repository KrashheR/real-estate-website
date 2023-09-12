import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = _resolve(__dirname, './src/index.tsx');
export const output = {
  filename: 'bundle.[contenthash].js',
  path: _resolve(__dirname, 'dist'),
  clean: true,
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
};
export const module = {
  rules: [
    {
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            disable: process.env.NODE_ENV !== 'production', // Отключите сжатие в режиме разработки
          },
        },
      ],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Real estate website',
    template: _resolve(__dirname, './public/index.html'),
  }),
];

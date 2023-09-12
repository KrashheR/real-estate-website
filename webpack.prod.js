import { merge } from 'webpack-merge';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import commonConfig from './webpack.common.js';

export default merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/real-estate-website/',
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
});

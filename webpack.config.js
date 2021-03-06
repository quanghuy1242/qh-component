const merge = require('webpack-merge');
const path = require('path');

const { createDefaultConfig } = require('@open-wc/building-webpack');
const config = createDefaultConfig({
  input: path.resolve(__dirname, './index.html'),
});

module.exports = (env, argv) => {
  return merge(config, {
    output: {
      filename: 'qh-component.min.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'lib/min')
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devtool: argv.mode !== 'production' ? 'source-map' : 'false',
    devServer: {
      contentBase: path.join(__dirname, 'lib/min'),
      compress: true
    }
  })
}
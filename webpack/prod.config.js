'use strict'

const path = require('path')
const common = require('./common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const pathsToClean = ['dist']
const cleanOptions = {
  root: path.join(__dirname, '../'),
  exclude: ['img'],
  verbose: true,
  dry: false
}

module.exports = {
  mode: 'production',
  target: common.target,
  entry: common.entry,
  output: common.output,

  module: {
    rules: [
      common.cssLoader,
      common.jsLoader
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: common.plugins.concat(
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  )
}

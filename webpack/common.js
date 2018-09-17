'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { name } = require('../package.json')

module.exports = {
  target: 'web',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: path.join('js', `${name}.js`),
    publicPath: '/dist/',
    libraryTarget: 'var',
    library: 'FancyCheckout'
  },

  cssLoader: {
    test: /\.s?[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options: { url: false, sourceMap: true } },
      { loader: 'sass-loader', options: { sourceMap: true } }
    ]
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join('css', `${name}.css`)
    })
  ]
}

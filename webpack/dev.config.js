const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { name } = require('../package.json')

const pathsToClean = ['dist']

const cleanOptions = {
  root: path.join(__dirname, '../'),
  exclude: ['img'],
  verbose: true,
  dry: false
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: path.join('js', `${name}.js`),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new MiniCssExtractPlugin({
      filename: path.join('css', `${name}.css`)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: true,
    watchContentBase: true,
    port: 3000
  }
}

const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}

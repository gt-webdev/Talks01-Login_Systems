module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    './src/client.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};
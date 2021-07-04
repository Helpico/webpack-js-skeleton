const path = require('path')

module.exports = {
  entry: {
    main: './proj1/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './proj1/dist'),
    filename: 'myBundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './proj1/dist',
    hot: true,
    // open: true
  },
  mode: 'development'
}
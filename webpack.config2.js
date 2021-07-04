const path = require('path')

module.exports = {
  entry: {
    main: './proj2/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './proj2/dist'),
    filename: 'myBundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './proj2/dist',
    hot: true
    // open: true
  },
  mode: 'development'
}
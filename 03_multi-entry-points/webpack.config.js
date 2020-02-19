const path = require('path');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'js', 'index.js'),
    account: path.resolve(__dirname, 'src', 'js', 'account.js'),
    contact: path.resolve(__dirname, 'src', 'js', 'contact.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
};
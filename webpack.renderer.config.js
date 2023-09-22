const rules = require('./webpack.rules');
const path = require('path')
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 "@" 别名映射到 "src" 目录
    },
  },
};

const rules = require('./webpack.rules');
const path = require('path')

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 "@" 别名映射到 "src" 目录
    },
  },
};

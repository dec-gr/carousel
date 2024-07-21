const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'carousel.js',
    globalObject: 'this',
    library: {
      name: 'carousel',
      type: 'umd',
      export: 'default',
    },
    clean: true,
  },
});

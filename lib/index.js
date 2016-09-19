
const modifyBabelPreset = require('modify-babel-preset')

module.exports = function preset(context, opts = {}) {
  const es2015 = modifyBabelPreset(['es2015', opts.es2015 || {}], {
    'transform-regenerator': false
  })

  return {
    presets: [
      es2015,
      require('babel-preset-es2016'),
      require('babel-preset-es2017'),
      require('babel-preset-stage-0'),
      require('babel-preset-stage-1'),
      require('babel-preset-stage-2'),
      require('babel-preset-stage-3')
    ],

    plugins: [
      'transform-decorators-legacy',
      ['transform-async-to-module-method', {'module': 'co', 'method': 'wrap'}]
    ]
  }
}

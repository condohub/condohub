const babelJest = require('babel-jest');

const babelConfig = require('./babel-test.config');

// module.exports = babelJest.createTransformer(babelConfig);

module.exports.presets = babelConfig.presets;
module.exports.plugins = babelConfig.plugins;

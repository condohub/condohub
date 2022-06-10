const mdx = require('@mdx-js/mdx');
const babel = require('@babel/core');

const babelConfig = require('./babel-test.config');
const presets = babelConfig.presets;
const plugins = babelConfig.plugins;

module.exports = {
  process(src, filename) {
    let rawMDX = src;
    // Convert .MDX file into JSX
    const result = mdx.sync(rawMDX);

    // Inject React and MDXTag imports
    var injectedJSX = `
        import {mdx} from '@mdx-js/react';
        ${result}
        `;

    // Transform ES6 with babel
    const babelResult = babel.transform(injectedJSX, {
      presets,
      plugins,
    }).code;

    return babelResult;
  },
};

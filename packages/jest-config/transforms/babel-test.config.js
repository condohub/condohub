module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    // '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-syntax-dynamic-import',
    '@vanilla-extract/babel-plugin',
  ],
};

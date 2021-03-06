module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'script',
    modules: true,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    mocha: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
  },
};

module.exports = {
  'env': {
    'es6': true,
    'node': true
  },

  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },

  'extends': [
    'eslint:recommended',
    'plugin:jest/recommended',
    './common.js'
  ]
};

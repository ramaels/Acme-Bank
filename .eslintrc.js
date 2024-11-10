'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:security/recommended-legacy',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'security',
  ],
  rules: {
    strict: ["error","global"],
  },
};

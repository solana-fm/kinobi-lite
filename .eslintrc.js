module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
  },
  ignorePatterns: ['dist/**'],
};

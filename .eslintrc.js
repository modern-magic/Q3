module.exports = {
  env: {
    node: true,
    es6: true
  },
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'kagura', 'prettier'],
  parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 2019, sourceType: 'module' }
}

module.exports = {
  root: true,
  env: { browser: true, es2023: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: null,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // The board is a static 3x3 grid; index keys are acceptable here.
    'react/no-array-index-key': 'off',
    // Prefer explicit boolean casting only when necessary
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
}

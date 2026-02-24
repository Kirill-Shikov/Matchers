import globals from 'globals';

export default [
  {
    files: ['src/**/*.js', 'src/**/*.test.js'],
    ignores: ['coverage/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.es2021
      }
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-console': 'warn'
    }
  }
];
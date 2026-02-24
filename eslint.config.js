export default [
  {
    files: ['src/**/*.js', 'src/**/*.test.js'],
    ignores: ['coverage/', 'node_modules/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-console': 'warn'
    }
  }
];
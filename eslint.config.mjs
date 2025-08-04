// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-trailing-spaces': 'error',
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      import: pluginImport,
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'prefer-const': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'no-var': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'camelcase': 'error',
      'import/no-cycle': 'error',
    }
  },
);
module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint', '@angular-eslint/template'],
  extends: [
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
    'eslint-config-airbnb-base',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.ts'],
      parserOptions: {},
      rules: {
        'comma-dangle': 'off', // Отключить базовое правило ESLint
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'], // Включить для TypeScript
      },
    },
    {
      files: ['*.html'],
      parser: '@angular-eslint/template-parser',
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.spec.ts'],
      env: {
        jasmine: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
      node: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.html', '.ts', '.tsx'],
      },
    },
  },
};

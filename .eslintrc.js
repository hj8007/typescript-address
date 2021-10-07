module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'prefer-const': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/explicit-function-return-type': 'error',
  //     },
  //   },
  // ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};

module.exports = {
  extends: ['turbo', 'prettier'],
  rules: {
    'react/jsx-key': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};

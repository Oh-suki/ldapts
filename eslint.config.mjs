import { config } from 'eslint-config-decent';

export default [
  ...config({
    tsconfigRootDir: import.meta.dirname,
  }),
  {
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-confusing-void-expression': 'off',
    },
  },
];
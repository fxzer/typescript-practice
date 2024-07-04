import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'no-console': 'off',
    'prefer-const': 'off',
    'ts/ban-types': 'warn',
    'unused-imports/no-unused-vars': 'off',
  },

})

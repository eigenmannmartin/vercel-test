module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'eslint-config-airbnb-base',
    '@nuxtjs/eslint-config-typescript',
    '@vue/prettier',
  ],
  rules: {
    'import/extensions': ['error', 'never', { vue: 'always' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'no-shadow': ['error', { allow: ['_'] }],
  },
  settings: {
    'import/resolver': 'nuxt',
    'import/core-modules': ['vue', 'vuex', 'moment'],
  },
};

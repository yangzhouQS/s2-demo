module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'prettier'
  ],
  // extends: [
  //   'eslint:recommended',
  //   'plugin:import/recommended',
  //   'airbnb-base',
  //   'plugin:vue/vue3-strongly-recommended',
  // ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', 'src']]
      }
    }
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: []
      }
    ],
    indent: ['error', 2],
    'prettier/prettier': 'error'
  }
}

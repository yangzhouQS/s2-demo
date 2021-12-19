module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', 'src']]
      }
    }
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/no-parsing-error': ['off'],
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        bundleDependencies: false,
        packageDir: './'
      }
    ],
    indent: ['error', 2]
  }
}

// https://jdmendozar.medium.com/how-to-setup-vue-3-with-vite-tailwind-and-eslint-prettier-b55644005c76

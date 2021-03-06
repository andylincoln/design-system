const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'plugin:jest/recommended'
  ],
  plugins: ['jest', 'react'],
  env: {
    'jest/globals': true
  },
  rules: {
    'react/jsx-no-bind': [IGNORE]
  }
}

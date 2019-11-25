module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "no-invalid-regexp": 2,
    "no-empty-function": 1,
    "no-invalid-this": 1,
    "no-self-compare": 1,
    "brace-style": [1, "1tbs", { "allowSingleLine": true }],
    "camelcase": [1, { properties: "always" }],
    "indent": [1, 4, { "SwitchCase": 1 }],
    "space-before-blocks": [2, "always"],
    "block-spacing": [2, "always"],
    "no-duplicate-imports": 2,
    "no-unused-vars": 2
  },
};
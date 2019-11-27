module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    //'prettier'
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
    //'prettier'
  ],
  rules: {
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-indent-props": 0,
    "no-invalid-regexp": 2,
    "no-empty-function": 1,
    "no-invalid-this": 1,
    "no-self-compare": 1,
    "brace-style": [1, "1tbs", { "allowSingleLine": true }],
    "camelcase": [1, { properties: "always" }],
    "space-before-blocks": [2, "always"],
    "block-spacing": [2, "always"],
    "indent": [1, 4],
    "react/jsx-indent": [1,4],
    "no-duplicate-imports": 2,
    "no-unused-vars": 2,
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "import/no-unresolved": "off",
    "linebreak-style": "off",
    "react/destructuring-assignment": "off",
    "react/no-access-state-in-setstate": "off",
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "global-require": 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }]
  },
};

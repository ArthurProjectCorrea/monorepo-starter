module.exports = {
  root: false,
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  plugins: ['import'],
  env: {
    node: true,
    es2021: true,
  },
  rules: {},
};

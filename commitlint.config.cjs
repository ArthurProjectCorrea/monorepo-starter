module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'api',
        'web',
        'docs',
        'ui',
        'eslint-config',
        'tailwind-config',
        'typescript-config',
        'monorepo'
      ]
    ]
  }
};

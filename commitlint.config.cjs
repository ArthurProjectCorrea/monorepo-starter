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
        '@repo/ui',
        '@repo/eslint-config',
        '@repo/tailwind-config',
        '@repo/typescript-config',
        'monorepo-starter'
      ]
    ]
  }
};

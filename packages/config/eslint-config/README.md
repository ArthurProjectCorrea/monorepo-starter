# @repo/eslint-config

> Centralized and shareable ESLint configuration for the monorepo.

## Overview

This package provides base and specialized ESLint configs for all apps and packages in the monorepo, ensuring code quality, consistency, and easy maintenance.

### Available Configs

- `base.js`: Base ESLint config for general JavaScript/TypeScript projects.
- `next.js`: Preset for Next.js projects.
- `react-internal.js`: Preset for internal React packages.

## How to Use

In your project, extend the desired config in your `eslint.config.js`:

```js
module.exports = require('@repo/eslint-config/base');
```

For Next.js projects:

```js
module.exports = require('@repo/eslint-config/next');
```

For internal React packages:

```js
module.exports = require('@repo/eslint-config/react-internal');
```

## Benefits

- Centralized linting rules for the entire monorepo
- Consistent code style and best practices
- Easy updates and maintenance
- Ready for use with Turborepo and PNPM Workspaces

## Maintenance

Update this package to change or extend linting rules. All apps/packages using these configs will inherit changes automatically.

See the main monorepo documentation for advanced usage and examples.

# @repo/typescript-config

> Centralized and shared TypeScript configuration for the entire monorepo.

## Overview

This package provides TypeScript configuration presets for all apps and packages in the monorepo, ensuring standardization, centralized maintenance, and a consistent DX.

### Available Files

- `base.json`: Base config for Node, NestJS, Astro, etc.
- `nextjs.json`: Preset for Next.js projects (SSR/SSG frontend).
- `react-library.json`: Preset for React libraries.

## How to Use

In your `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/base.json"
}
```

For Next.js:

```json
{
  "extends": "@repo/typescript-config/nextjs.json"
}
```

For React libraries:

```json
{
  "extends": "@repo/typescript-config/react-library.json"
}
```

## Benefits

- Centralized rules and global paths
- Single update for the whole monorepo
- Reduces duplication and divergence
- Ready for use with Turborepo and PNPM Workspaces

## Maintenance

Whenever you need to change global rules, edit only this package. All apps/packages will inherit changes automatically.

See the main monorepo documentation for advanced examples and details.

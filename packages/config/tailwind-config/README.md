# @repo/tailwind-config

> Centralized Tailwind CSS and PostCSS configuration for the monorepo.

## Purpose

This package provides presets, themes, plugins, and global configurations for Tailwind CSS and PostCSS for all apps and packages in the monorepo, ensuring visual consistency and easy maintenance.

## Structure

- `tailwind.preset.js`: Global Tailwind preset (theme, plugins, etc).
- `postcss.config.js`: Shared PostCSS configuration.
- `shared-styles.css`: Optional global styles.

## How to Use

1. Install the required dependencies in your app/package:

   ```sh
   pnpm add -D tailwindcss postcss autoprefixer @repo/tailwind-config
   ```

2. Create or edit the `tailwind.config.js` in your app/package:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     presets: [require('@repo/tailwind-config/tailwind.preset')],
     // Add other local config as needed
   };
   ```

3. For PostCSS, import the shared config if needed:

   ```js
   import { postcssConfig } from '@repo/tailwind-config/postcss';
   export default postcssConfig;
   ```

4. Run the usual scripts:
   - `pnpm build:styles`
   - `pnpm dev:styles`

## Dependencies

- `tailwindcss` and `postcss` as devDependencies (in this package; apps/packages may need them for local CLI).
- Recommended plugins: `@tailwindcss/forms`, `@tailwindcss/typography`.

## File Structure

```
packages/config/tailwind-config/
├── postcss.config.js
├── shared-styles.css
├── tailwind.preset.js
└── README.md
```

## Maintenance

Update this package whenever there are global design, token, plugin, or Tailwind usage pattern changes in the monorepo.

---

Maintainer: @ArthurProjectCorrea

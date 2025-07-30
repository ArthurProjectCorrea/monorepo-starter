# scripts/

> Utility scripts and automations for setup, maintenance, and customization of the monorepo.

## Overview

This folder contains essential scripts for onboarding, automation, and maintenance workflows in the monorepo. The main highlight is `post-init.js`, responsible for:

- Ensuring the existence and checkout of `main` and `dev` branches.
- Automating environment variable and secret setup.
- Customizing names, imports, and files for new monorepo repositories.
- Validating setup (install, lint, build, test) and performing automatic commit/push.
- Linking Turbo Remote Cache and installing recommended VSCode extensions.
- Triggering key GitHub Actions workflows for synchronization and maintenance.

## Available Scripts

- **post-init.js**: Main post-clone/setup script. Runs the full monorepo customization and validation flow.
  - Usage: `node scripts/post-init.js`
  - Optional arguments:
    - `--skip-gh` (skip GitHub secrets setup)
    - `--skip-turbo` (skip Turbo login)
    - `--skip-vscode` (skip VSCode extension installation)

## How to Use

1. Make sure you have Node.js, pnpm, GitHub CLI (gh), and VSCode CLI installed.
2. After cloning the repository, run:

   ```sh
   node scripts/post-init.js
   ```

3. Follow the interactive instructions to provide tokens and repository data.
4. The script will handle all setup, commit/push, and trigger initial workflows.

## Structure

- `post-init.js`: Monorepo setup and customization automation.
- (Other utility scripts may be added as needed.)

## Integration with the Monorepo

Scripts in this folder are fundamental to ensure the monorepo is always aligned with best practices, up-to-date, and ready for use in new repositories derived from the template.

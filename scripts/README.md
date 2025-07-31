# scripts Directory

This folder contains automation and utility scripts used to support, validate, and maintain the monorepo.

## Purpose

- Centralize project automation, validation, and setup routines.
- Provide tools for reporting, code quality, CI/CD, and developer experience.

## Key Scripts

- `report-version-impact.js`: Generates a report of all packages that will be versioned and their respective version bump levels (major, minor, patch) by analyzing commits between branches. Used to inform changeset documentation and release planning.
- `post-init.js`: Handles post-clone or post-install setup tasks for the monorepo, such as syncing configs or preparing the environment.

## Usage

- Run scripts directly with Node.js or as part of npm/pnpm scripts:
  ```bash
  node scripts/report-version-impact.js
  ```
- Some scripts may be invoked automatically by CI/CD or project hooks.

## Best Practices

- Keep scripts modular and well-documented.
- Prefer Node.js for cross-platform compatibility.
- Update this README whenever new scripts are added or existing ones are changed.

## References

- See `.github/instructions/` for project automation and workflow standards.

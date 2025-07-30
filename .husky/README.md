# Monorepo Git Hooks (`.husky`)

This directory contains the automated Git hooks that ensure code quality, standardization, and safety in the monorepo development workflow.

## Purpose

Centralize and version all Git hooks used across the monorepo, integrating automatic validations into the commit and push cycle, aligned with CI/CD practices and the project's quality standards.

## Configured Hooks

- **pre-commit**: Runs global `pnpm build`, `pnpm lint`, and `lint-staged` on changed files, preventing commits with broken or poorly formatted code.
- **commit-msg**: Validates commit messages using `commitlint` with required scopes matching the main monorepo folders (e.g., api, web, docs, ui, eslint-config, etc). Non-compliant commits are blocked.
- **pre-push**: Runs `pnpm typecheck` and all tests (`pnpm test`) before allowing a push, ensuring nothing breaks on the remote branch.

> **Note:** Commitlint is configured to accept only valid scopes according to the automated versioning flow (see `commitlint.config.cjs`). This ensures the changeset workflow correctly recognizes changes and versions each app/package as needed.

## Integration with Automated Versioning Flow

Hooks are triggered automatically by Git when running `git commit` or `git push`. They ensure:

- **Code quality**: Lint, build, and tests are orchestrated for all relevant packages and apps.
- **Commit standardization**: Messages are validated with required scopes, ensuring traceability and integration with CI/CD and the changeset workflow.
- **Error prevention**: Commits and pushes are only allowed if all validations pass.

> **Tip:** Commits with invalid scopes are blocked locally, preventing errors in automatic versioning and release.

## Usage Examples

```sh
# Normal commit (hooks will run)
git add .
git commit -m "feat(api): add authentication endpoint"

# Commit without hooks (not recommended)
git commit --no-verify

# Normal push (runs pre-push)
git push

# Push without hooks (not recommended)
git push --no-verify
```

## Customizing Hooks

Each hook script can be edited as needed. To add new hooks, create an executable file in this directory.

> **Attention:** Whenever you change, add, or remove hooks, keep this README updated to reflect the real monorepo workflow.

---

### References

- [Husky official documentation](https://typicode.github.io/husky/#/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Monorepo main README](../README.md)

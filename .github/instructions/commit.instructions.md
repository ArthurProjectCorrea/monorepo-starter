---
applyTo: '**'
---

# Quick Guide to Conventional Commits for the Monorepo

Standardize your commits to ensure traceability, correct versioning, and CI/CD integration.

## Commit Structure

```bash
<type>(scope): short description
```

- **Scope**: always use the name of the main folder affected (e.g., api, web, docs, ui, eslint-config, etc). For files outside these, use `monorepo`.
- **Main types**: feat, fix, refactor, perf, chore, docs, style, test, ci, build, revert.
- **Title**: up to 72 characters, imperative, no period at the end.

## Required Workflow

1. Group files by main folder (scope).
2. Separate by type of change.
3. Create one commit per group (e.g., feat(api), fix(web), chore(monorepo)).
4. Never mix different scopes in the same commit.

## When to use BREAKING CHANGE

- Use BREAKING CHANGE in the commit body whenever there is a change that is not backward compatible (e.g., API removal/renaming, contract change, expected behavior change).
- The commit can be of any type (feat, fix, refactor, etc), but must include:

```bash
feat(api): remove legacy endpoint

BREAKING CHANGE: The /v1/legacy endpoint was removed. Update your integrations.
```

- Every BREAKING CHANGE triggers a major version bump.

## Types that DO NOT trigger versioning

- chore, docs, style, test, ci, build, revert (unless BREAKING CHANGE).
- Only feat, fix, refactor (when it changes the API), perf (when it changes the API), and BREAKING CHANGE affect versioning.

## Examples

```bash
feat(api): add JWT authentication
fix(web): fix navigation bug
chore(monorepo): update global dependencies
docs(docs): improve setup documentation
refactor(ui): reorganize internal components
```

## Best Practices

- Make small and frequent commits.
- Never use generic or multiple scopes.
- Always run lint, build, and tests before pushing.
- Reference issues/PRs when applicable.

---

This guide is mandatory for all commits in the monorepo. Questions? Check the README or ask for a review.

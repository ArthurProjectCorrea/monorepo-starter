---
applyTo: '**'
---

# Quick Guide to Conventional Commits for the Monorepo

## Pastas mestre (escopos válidos)

Os únicos escopos permitidos para commits são os nomes das pastas que possuem `package.json` próprio (pastas mestre):

- api (apps/api)
- web (apps/web)
- docs (apps/docs)
- ui (packages/ui)
- eslint-config (packages/config/eslint-config)
- tailwind-config (packages/config/tailwind-config)
- typescript-config (packages/config/typescript-config)

Para arquivos fora dessas pastas, use sempre o escopo `monorepo`.

Standardize your commits to ensure traceability, correct versioning, and CI/CD integration.

## Commit Structure

```bash
<type>(scope): short description
```

- **Scope**: use only the name of the master folder (see list above). For files outside these, use `monorepo`.
- **Main types**: feat, fix, refactor, perf, chore, docs, style, test, ci, build, revert.
- **Title**: up to 72 characters, imperative, no period at the end.

## Required Workflow

1. Group files by main folder (scope).
2. Separate by type of change.
3. Create one commit per group (e.g., feat(api), fix(web), chore(monorepo)).
4. Never mix different scopes in the same commit. Only use the valid scopes listed above.

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

## [skip ci] — When and How to Use

- Only use `[skip ci]` in the commit message when you are making changes that do **not** require running CI/CD pipelines (e.g., updating documentation, comments, or non-code files).
- Never use `[skip ci]` in commits that affect source code, configuration, dependencies, or anything that could impact build, test, or release.
- Place `[skip ci]` at the end of the commit message, after the description.
- Example:

```bash
docs(docs): update contributing guide [skip ci]
```

- Avoid overusing `[skip ci]` to ensure CI/CD always validates relevant changes.

## Best Practices

- Make small and frequent commits.
- Never use generic or multiple scopes.
- Always run lint, build, and tests before pushing.
- Reference issues/PRs when applicable.

---

This guide is mandatory for all commits in the monorepo. Questions? Check the README or ask for a review.

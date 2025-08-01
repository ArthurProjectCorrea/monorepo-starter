---
applyTo: '**'
---

# Conventional Commits Guide for monorepo-starter

## Automated Commits: Mandatory commit-by-scope.js and scopes.json Workflow

Whenever you are required to perform batch or automated commits (e.g., dependency updates, refactoring across multiple packages, etc.), you must follow this workflow:

1. Run the script `scripts/commit-by-scope.js` from the project root. This will generate the file `scripts/temp/scopes.json`, grouping changed files by scope (package name).
2. Read the file `scripts/temp/scopes.json` to identify file groups by scope.
3. For each scope listed in the file, create a separate commit, following the conventional commit structure described in this guide, grouping only files from that scope.
4. Never mix files from different scopes in the same commit.

> Example workflow:
>
> 1. `node scripts/commit-by-scope.js`
> 2. Read the result in `scripts/temp/scopes.json`
> 3. For each key (scope) in the JSON, create a commit with the files in that group, using the appropriate type and message.

This procedure ensures that all commits are always correct and grouped according to monorepo rules, even in automated scenarios.

## Scopes: How to Determine the Correct Scope for Each File

Scopes are strictly defined as the `name` field of the nearest `package.json` found when traversing up from the file being committed. This ensures that every file in the monorepo is associated with the correct package for commit and versioning purposes.

**How to determine the scope for a file:**

1. Start in the same directory as the file you want to commit.
2. If there is a `package.json` in that directory, use its `name` as the scope.
3. If not, move up one directory and check again.
4. Repeat this process until you find a `package.json` or reach the project root.
5. If you reach the project root and find a `package.json`, use its `name` as the scope (`monorepo-starter`).
6. If no `package.json` is found, do not commit the file (this should not happen in a properly structured monorepo).

**Example:**

- Committing `packages/ui/src/card.test.tsx`:
  - No `package.json` in `src/`.
  - Go up to `packages/ui/` — found `package.json` with name `@repo/ui`.
  - The commit scope for this file is `@repo/ui`.

**Commit grouping logic:**

1. Group all files to be committed by their resolved scope (i.e., the nearest `package.json` name).
2. Within each scope, further group files by the type of change (`feat`, `fix`, `chore`, `docs`, etc.).
3. For each group (same scope and type), create a single commit.
4. Never mix files from different scopes in the same commit.
5. Never mix different types in the same commit for a given scope.

This logic must be followed strictly to maintain consistency and to ensure that future changeset and versioning reports are accurate.

**Valid scopes (auto-generated from package.json files):**

<!-- BEGIN AUTO SCOPES -->

- api (apps/api/package.json)
- docs (apps/docs/package.json)
- web (apps/web/package.json)
- monorepo-starter (package.json)
- @repo/eslint-config (packages/config/eslint-config/package.json)
- @repo/tailwind-config (packages/config/tailwind-config/package.json)
- @repo/typescript-config (packages/config/typescript-config/package.json)
- @repo/ui (packages/ui/package.json)
<!-- END AUTO SCOPES -->

## Commit Structure

```bash
<type>(scope): short description
```

- **Scope**: Always use the name of the nearest `package.json` as described above.
- **Main types**: feat, fix, refactor, perf, chore, docs, style, test, ci, build, revert.
- **Title**: Up to 72 characters, imperative, no period at the end.

## Required Workflow

1. For each set of files to be committed, resolve the scope for each file as described above.
2. Group files by scope.
3. Within each scope, group files by type of change.
4. Create one commit per (scope, type) group (e.g., feat(api), fix(web), chore(@repo/ui)).
5. Never mix files from different scopes or types in the same commit.

## When to Use BREAKING CHANGE

You must indicate a breaking change (not backward compatible, e.g., API removal/renaming, contract change, expected behavior change) in one of two ways:

1. Add `!` after the type or scope in the commit header (e.g., `feat(api)!:` or `fix!:`).
2. Or, include `BREAKING CHANGE:` in the commit body.

**Examples:**

```bash
feat(api)!: remove legacy endpoint

BREAKING CHANGE: The /v1/legacy endpoint was removed. Update your integrations.
```

or

```bash
feat(api): remove legacy endpoint

BREAKING CHANGE: The /v1/legacy endpoint was removed. Update your integrations.
```

Any commit marked as a breaking change will trigger a major version bump for the affected package.

## Types That DO NOT Trigger Versioning

- chore, docs, style, test, ci, build, revert (unless BREAKING CHANGE).
- Only feat, fix, refactor (when it changes the API), perf (when it changes the API), and BREAKING CHANGE affect versioning.

## Examples

```bash
feat(api): add JWT authentication
fix(web): fix navigation bug
chore(monorepo-starter): update global dependencies
docs(docs): improve setup documentation
refactor(@repo/ui): reorganize internal components
```

## Do NOT Use `[skip ci]`

**Warning:** Never use `[skip ci]` in any commit message in this repository.

Using `[skip ci]` prevents validation workflows from running and undermines the quality and automation guarantees of the monorepo. All commits must pass automatic CI/CD validation, regardless of the type of change.

If you need to skip CI/CD steps, consult the repository maintainer before taking any action.

## Best Practices

- Always use git commands such as `git status` and `git diff` to review which files will be included in your commit and to verify your changes before staging and committing.
- Make small and frequent commits.
- Never use generic or multiple scopes.
- Always run lint, build, and tests before pushing.
- Reference issues/PRs when applicable.

---

This guide is mandatory for all commits in the monorepo-starter. For questions, check the README or request a review.

---
applyTo: '**'
---

# Changeset Documentation Instructions

This instruction defines the workflow and requirements for generating and documenting changesets in this monorepo. Follow these steps strictly to ensure high-quality, traceable, and informative release notes for every versioned package.

## Workflow

1. **Analyze Impact:**
   - Run `node scripts/report-version-impact.js` to generate a report of all packages that will be versioned and their respective version bump levels (major, minor, patch).
   - Review the output to identify which packages will be included in the next changeset and why.

2. **Generate Changeset:**
   - Run `pnpm changeset` to create a new changeset markdown file.
   - When prompted for a summary/description, you may enter a placeholder or minimal text, as this will be replaced in the next step.

3. **Replace and Enhance Description:**
   - Open the newly created changeset file in `.changeset/`.
   - Replace the default or placeholder description with a detailed, technical summary.
   - The summary must:
     - Clearly list all packages being versioned and their bump type (major, minor, patch).
     - For each package, enumerate the commits that triggered the version bump.
     - For each commit, document:
       - What was implemented, changed, or removed.
       - The reason for the change (if relevant).
       - Any breaking changes (explicitly call out breaking API/contract changes).
     - Use clear, technical English. Avoid vague or generic statements.
     - Example structure:

```
## Release Summary

- **@repo/ui** (minor):
  - feat(@repo/ui): add new Card component with customizable props. Enables advanced UI composition. (commit abc123)
  - fix(@repo/ui): resolve style conflict in Button. Ensures consistent theming. (commit def456)

- **api** (major):
  - feat(api)!: remove legacy authentication endpoint. BREAKING CHANGE: All clients must migrate to JWT. (commit 789xyz)

---

All changes are grouped by package and described in detail. Breaking changes are clearly marked. This ensures that consumers and maintainers can understand the impact of each release at a glance.
```

## Requirements

- The changeset description must always be replaced with a detailed, technical summary as described above.
- All relevant commits must be referenced and described.
- Use commit messages and diffs as the source of truth for what changed.
- Write in clear, technical English.

## Purpose

This process ensures that every changeset provides actionable, transparent, and accurate release documentation, supporting maintainers and consumers in understanding the scope and impact of each release.

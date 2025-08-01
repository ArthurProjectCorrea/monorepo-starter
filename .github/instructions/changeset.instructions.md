---
applyTo: '**'
---

# Changeset Documentation Instructions

This document defines the mandatory workflow and requirements for generating and documenting changesets in this monorepo. Follow these steps strictly to ensure high-quality, traceable, and actionable release notes for every versioned package. All instructions must be interpreted and executed precisely by Copilot agents and code maintainers.

## Workflow

1. **Analyze Impact:**
   - Execute `node scripts/report-version-impact.js` to generate a report of all packages that will be versioned, including their respective version bump levels (major, minor, patch).
   - Review the output to determine which packages require a changeset and the reasons for their inclusion.

2. **Generate Changeset:**
   - Execute `pnpm changeset` to create a new changeset markdown file.
   - When prompted for a summary/description, enter a placeholder (this will be replaced in the next step).

3. **Replace and Enhance Description:**
   - Open the newly created changeset file in `.changeset/`.
   - Replace the default or placeholder description with a comprehensive, technical summary. The placeholder must never be left in the final version.
   - The summary must:
     - Explicitly list all packages being versioned and their bump type (major, minor, patch).
     - For each package, enumerate the commits that triggered the version bump.
     - For each commit, document:
       - What was implemented, changed, or removed.
       - The reason for the change (if relevant).
       - Any breaking changes (explicitly call out breaking API/contract changes and mark as BREAKING CHANGE).
     - Use clear, technical English. Avoid vague or generic statements.
   - Example structure (must be followed):

```
## Release Summary

- **@repo/ui** (minor):
  - feat(@repo/ui): add new Card component with customizable props. Enables advanced UI composition. (commit abc123)
  - fix(@repo/ui): resolve style conflict in Button. Ensures consistent theming. (commit def456)

- **api** (major):
  - feat(api)!: remove legacy authentication endpoint. BREAKING CHANGE: All clients must migrate to JWT. (commit 789xyz)

---

All changes must be grouped by package and described in detail. Breaking changes must be clearly marked. This ensures that consumers and maintainers can understand the impact of each release at a glance.
```

## Requirements

- The changeset description must always be replaced with a detailed, technical summary as described above. Never leave the default or placeholder text.
- All relevant commits must be referenced and described with technical accuracy.
- Use commit messages and diffs as the source of truth for what changed.
- Write in clear, technical English. Avoid informal or ambiguous language.
- Review the changeset for completeness and clarity before merging.

## Purpose

This process ensures that every changeset provides actionable, transparent, and accurate release documentation. It supports maintainers and consumers in understanding the scope and impact of each release, and enforces best practices for technical documentation in this monorepo.

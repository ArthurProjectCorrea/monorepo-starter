# .changeset Directory

This folder stores the changeset files used for automated versioning control in the monorepo.

## How does the workflow work in this project?

- **Changesets are generated and updated automatically** by a GitHub Actions workflow whenever there is a PR from `dev` to `main`.
- The file `.changeset/auto-impact-pr<N>.md` (where <N> is the PR number) is created or updated on every PR update, always reflecting the accumulated versioned changes.
- The file content follows the Changesets standard and is processed automatically during the release step.
- Manual creation or editing of changesets is not required, except if you want to improve the description in the file body.

### Example of generated file

```md
---
'apps/api': minor
'packages/ui': patch
---

[AUTOMATIC] Update this description to detail the main changes for each scope.
```

> The file is always updated by the workflow. If you want to add details, edit the description before merging.

---

For more details about the flow, see the monorepo documentation or the `generate-changeset.yml` workflow.

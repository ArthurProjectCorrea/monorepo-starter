# .changeset Directory

This directory stores all pending and historical changeset markdown files for the monorepo. Each file describes the versioning impact, affected packages, and release notes for a set of changes.

## Purpose

- Track and document all versionable changes in a transparent, auditable way.
- Enable automated and manual release workflows using the Changesets tool.
- Ensure every release is accompanied by clear, technical documentation of what changed and why.

## Workflow

1. When you make a change that affects a versioned package, generate a new changeset using:
   ```bash
   pnpm changeset
   ```
2. After generating, replace the default summary in the new markdown file with a detailed, technical description (see the instructions in `.github/instructions/changeset.instructions.md`).
3. Commit the changeset file along with your code changes.
4. When releases are prepared, all changeset files are combined into a changelog and version bumps are applied automatically.

## Best Practices

- Never delete or manually edit historical changeset files.
- Always follow the documentation and commit guidelines for writing changeset summaries.
- Keep this directory under version control.

## References

- [Changesets Documentation](https://github.com/changesets/changesets)
- Project-specific instructions: `.github/instructions/changeset.instructions.md`

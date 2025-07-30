---
applyTo: '.changeset/'
---

# Changeset File Maintenance Instructor

## Purpose

This instructor defines the rules for Copilot Chat (and any automation) to verify, update, and maintain the changeset file(s) in the monorepo. The goal is to ensure that every changeset file:

- Exists when required (for versioned changes)
- Has an up-to-date and accurate description reflecting the actual commits and changes that require versioning
- Only updates the description section, never overwriting the version block or manual edits outside the description

## Guidelines

1. **Existence Check**: If a changeset file does not exist, do nothing. Only proceed if the file is present.
2. **Description Validation**: If a changeset file exists, check if its description accurately summarizes the versioned changes (based on relevant commits and file diffs).
3. **Selective Update**: If the description is outdated or missing, update only the description section of the changeset file. Do not modify the version block or any manual notes outside the description.
4. **Versioned Changes Only**: Only consider commits and changes that impact versioning (ignore chore, docs, style, test, ci, build, revert unless BREAKING CHANGE).
5. **Description Content**: The description must:
   - Summarize the main versioned changes for each affected scope/package
   - Reference the relevant commit types and scopes (e.g., feat(api), fix(web))
   - Be clear, concise, and reflect the real impact of the PR or set of changes
6. **Manual Edits**: If the description was manually edited and is still accurate, do not overwrite it. Only update if it is outdated or incomplete.
7. **Consistency**: Follow the same language, formatting, and standards as other documentation in the monorepo.

## Example Workflow

1. Detect if a changeset file exists for the current PR or set of changes.
2. Parse the version block (between ---) and do not modify it.
3. Analyze the commits and file changes that require versioning.
4. Compare the current description with the actual changes.
5. If the description is outdated or missing, update only the description section to accurately reflect the versioned changes.
6. Leave any manual notes or additional context outside the description untouched.

---

Copilot Chat and any automation must follow this instructor to ensure all changeset files are always present and their descriptions are accurate, up-to-date, and focused only on versioned changes.

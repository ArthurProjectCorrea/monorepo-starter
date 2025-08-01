---
name: 'Chore/Technical Task'
description: 'Request a technical task or maintenance activity.'
about: 'Template for technical chores, refactors, upgrades, or maintenance.'
title: '[Chore] <Short Description>'
labels: ['chore']
---

## �️ Branch Name

Suggested pattern: `chore/<issue-number>-<short-description>`

Example: `chore/123-update-deps`

---

## 🔧 Task Description

Describe the technical task or maintenance required:

- **Type of task:** (Dependency upgrade, code cleanup, script/automation, infra, CI/CD, etc.)
- **Motivation/justification:** (Why is this needed? Is it blocking something? Is it technical debt?)
- **Is it routine or one-off?** (E.g., regular update, migration, infra change)
- **Potential impact:** (Could it break something? Affect build, deploy, CI/CD?)
- **Dependencies or order:** (Should it be done before/after another task? Is it blocking something else?)
- **What is out of scope?** (Anything intentionally not included)

Example:

> Upgrade all workspace dependencies to latest minor versions. Motivation: keep security and compatibility. Routine task, no breaking changes expected. Should be done before next release. Out of scope: major upgrades.

---

## 📋 Chore Checklist

- [ ] Task is clearly described and justified
- [ ] Type of task and impact documented
- [ ] Dependencies and order considered
- [ ] No breaking changes (unless justified)
- [ ] Tests updated/added (if needed)
- [ ] Documentation updated (if needed)
- [ ] CI/CD or automation validated (if relevant)
- [ ] Code review completed

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Dependencies**           | E.g.: `zod`, `axios`                        |
| **Helper scripts/CI**      | Build, seed, deploy, lint, test, release    |
| **Automation**             | Is there a script or workflow involved?     |
| **Environment**            | OS, CI/CD, local, etc.                      |

---

## 📚 Documentation (if relevant)

- [ ] Update package or app `README.md` (if needed)
- [ ] Update `apps/docs` via Starlight (if needed)
- [ ] Add comments directly in the code (if needed)

---

## ✅ Acceptance Criteria

- [ ] Task is clearly described and justified
- [ ] No regressions in impacted apps/packages
- [ ] No breaking changes (unless justified)
- [ ] Tests (if needed) cover main flows
- [ ] Documentation is clear and updated (if needed)
- [ ] CI/CD or automation validated (if relevant)
- [ ] Merge without conflicts with `dev`

---

## 📝 Final Notes

- Doubts, risks, external dependencies, or blockers
- Rollback plan (if needed)
- Suggestions for approach, extra validations, or future integrations
- Points to be reviewed in the PR (e.g., technical decisions, scope deviations, extra deliveries)

---

♻️ **AI Triggers (Copilot/ChatGPT)**
Use the commands below for specific automations:

- `@start`: Start chore flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

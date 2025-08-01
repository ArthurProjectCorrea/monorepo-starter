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

Describe clearly and objectively:

- What technical task or maintenance is required?
- What is the motivation or justification?
- What is out of scope (if anything)?

Example:

> Update web package dependencies to the latest Next.js version

---

## � Tasks

- [ ] Main implementation
- [ ] Add/Update tests (if needed)
- [ ] Update documentation (if needed)
- [ ] Validate in all affected packages/apps
- [ ] Code review

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Dependencies**           | E.g.: `zod`, `axios`                        |
| **Aliases/Paths**          | E.g.: `@/shared/*`, `@api/*`                |
| **Helper scripts**         | Build, seed, deploy scripts, etc.           |
| **Environment**            | OS, browser, device, network, etc.          |

---

## 📚 Documentation

- [ ] Package or app `README.md` updated
- [ ] `apps/docs` via Starlight
- [ ] Comments directly in the code

---

## ✅ Acceptance Criteria

- [ ] Task is clearly described and justified
- [ ] No regressions in impacted apps/packages
- [ ] Tests (if needed) cover main flows
- [ ] Clear and accessible technical documentation (if needed)
- [ ] Merge without conflicts with `dev`

---

## 📝 Final Notes

- Possible doubts, risks, external dependencies, or blockers
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

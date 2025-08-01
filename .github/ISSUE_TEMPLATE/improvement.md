---
name: 'Improvement/Refactor'
description: 'Request an improvement or refactor in the monorepo.'
about: 'Template for improvements, refactors, and technical enhancements.'
title: '[Improvement] <Short Description>'
labels: ['enhancement', 'refactor']
---

## 🛠️ Branch Name

Suggested pattern: `improvement/<issue-number>-<short-description>`

Example: `improvement/123-header-refactor`

---

## 💡 Improvement/Refactor Description

Describe clearly and objectively:

- What can be improved or refactored?
- What is the motivation or justification?
- What is out of scope (if anything)?

Example:

> Refactor the Header component to use styled-components.

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
| **Expected impact**        | Performance, readability, maintainability   |

---

## 📚 Documentation

- [ ] Package or app `README.md` updated
- [ ] `apps/docs` via Starlight
- [ ] Comments directly in the code

---

## ✅ Acceptance Criteria

- [ ] Improvement/refactor is clearly described and justified
- [ ] Expected impact is defined
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

- `@start`: Start improvement/refactor flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

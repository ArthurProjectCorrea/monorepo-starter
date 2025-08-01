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

Describe the improvement or refactor in detail:

- **What will be improved or refactored?** (Component, module, infra, process, etc.)
- **What is the technical debt or pain point?** (Why is this needed? Is it blocking something? Is it a code smell?)
- **What is the expected impact?** (Performance, maintainability, readability, testability, etc.)
- **What are the risks?** (Could it break something? Affect legacy code?)
- **What is out of scope?** (Anything intentionally not included)
- **Are there metrics before/after?** (Optional: performance, bundle size, coverage)
- **Is this a pure refactor or does it change behavior?** (If yes, describe the change)

Example:

> Refactor the Header component to use styled-components. Motivation: reduce style duplication and improve maintainability. Expected impact: smaller CSS bundle, easier theming. Out of scope: mobile header. No behavior change expected.

---

## 📋 Refactor Checklist

- [ ] Improvement/refactor is clearly described and justified
- [ ] Technical debt or pain point identified
- [ ] Expected impact and risks documented
- [ ] Metrics before/after (if relevant)
- [ ] No behavior change (unless justified)
- [ ] Tests updated/added (if needed)
- [ ] Documentation updated (if needed)
- [ ] Code review completed

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Dependencies**           | E.g.: `zod`, `axios`                        |
| **Legacy code affected**   | E.g.: files, modules, patterns refatorados  |
| **Helper scripts**         | Build, seed, deploy, migration, etc.        |
| **Expected impact**        | Performance, readability, maintainability   |
| **Metrics before/after**   | Optional: performance, bundle size, etc.    |

---

## 📚 Documentation (if relevant)

- [ ] Update package or app `README.md` (if needed)
- [ ] Update `apps/docs` via Starlight (if needed)
- [ ] Add comments directly in the code (if needed)

---

## ✅ Acceptance Criteria

- [ ] Improvement/refactor is clearly described and justified
- [ ] Technical debt or pain point identified
- [ ] Expected impact and risks documented
- [ ] No regressions in impacted apps/packages
- [ ] No behavior change (unless justified)
- [ ] Tests (if needed) cover main flows
- [ ] Documentation is clear and updated (if needed)
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

- `@start`: Start improvement/refactor flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

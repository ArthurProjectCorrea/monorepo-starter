---
name: 'Bug Report'
description: 'Report a bug or unexpected behavior in the monorepo.'
about: 'Template for reporting bugs, including reproduction, context, evidence, and acceptance criteria.'
title: '[Bug] <Short Description>'
labels: ['bug']
---

## 🛠️ Branch Name

Suggested pattern: `fix/<issue-number>-<short-description>`

Example: `fix/123-login-bug`

---

## 🐞 Bug Description

Describe clearly and objectively:

- What happened?
- What did you expect to happen?
- Steps to reproduce the bug
- Is it intermittent or always reproducible?

Example:

> The login button does not respond to clicks on the home screen.
> Expected: open authentication modal.
> Steps: 1. Go to /login 2. Click the button 3. Nothing happens

---

## � Tasks

- [ ] Reproduce the bug
- [ ] Identify root cause
- [ ] Implement fix
- [ ] Add/Update tests
- [ ] Update documentation if needed
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

## 📝 Evidence

Include screenshots, logs, stack traces, or relevant links.

---

## 🧪 Test Strategy

- Frameworks used: `Jest`, `Vitest`, etc.
- Types: unit, integration, e2e
- Main test scenarios
- Expected mocks/stubs
- Minimum desired coverage (e.g., 80%)

---

## 📚 Documentation

- [ ] Package or app `README.md` updated
- [ ] `apps/docs` via Starlight
- [ ] Comments directly in the code

---

## ✅ Acceptance Criteria

- [ ] Bug is reproducible and fixed
- [ ] No regressions in impacted apps/packages
- [ ] Tests cover main flows and the fix
- [ ] Clear and accessible technical documentation
- [ ] Merge without conflicts with `dev`

---

## 📝 Final Notes

- Possible doubts, risks, external dependencies, or blockers
- Suggestions for approach, extra validations, or future integrations
- Points to be reviewed in the PR (e.g., technical decisions, scope deviations, extra deliveries)

---

♻️ **AI Triggers (Copilot/ChatGPT)**
Use the commands below for specific automations:

- `@start`: Start bugfix flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

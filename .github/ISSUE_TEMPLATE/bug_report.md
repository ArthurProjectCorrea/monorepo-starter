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

Describe the bug in detail:

- **What happened?** (Describe the observed behavior)
- **What did you expect to happen?** (Describe the expected behavior)
- **Steps to reproduce:** (List each step clearly)
- **Frequency:** (Always, sometimes, rare? If intermittent, how often?)
- **Environment:** (Production, staging, local, OS, browser, device, network, etc.)
- **Impact:** (Does it block release, affect all users, only a subset, or is it cosmetic?)
- **Is there a workaround?** (Temporary solution, if any)
- **Is this a regression?** (Did it work before? Since when?)
- **Related issues/PRs:** (Links to similar bugs, related tickets, or previous fixes)

Example:

> When clicking the login button on the home screen, nothing happens. Expected: open authentication modal. Steps: 1. Go to /login 2. Click the button 3. Nothing happens. Happens on Chrome/Windows, both in production and staging. No workaround. Regression since v2.1. Related: #123, PR #456.

---

## 📋 Bug Checklist

- [ ] Bug is reproducible (steps provided)
- [ ] Environment and frequency described
- [ ] Impact and workaround (if any) documented
- [ ] Evidence (logs, screenshots) attached
- [ ] Related issues/PRs linked (if any)
- [ ] Root cause identified
- [ ] Fix implemented
- [ ] Tests updated/added
- [ ] Documentation updated (if needed)
- [ ] Code review completed

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Dependencies**           | E.g.: `zod`, `axios`                        |
| **Aliases/Paths**          | E.g.: `@/shared/*`, `@api/*`                |
| **Helper scripts**         | Build, seed, deploy scripts, etc.           |
| **Error logs**             | Paste relevant error logs or stack traces   |
| **Environment**            | OS, browser, device, network, etc.          |

---

## 📝 Evidence

Attach any relevant evidence:

- Screenshots or screen recordings
- Error logs or stack traces
- Links to failing builds, Sentry, monitoring, etc.

---

## 🧪 Test Strategy (for bugfix)

- What tests failed (if any)?
- What new/updated tests are needed to prevent regression?
- Frameworks used: `Jest`, `Vitest`, etc.
- Types: unit, integration, e2e
- Main test scenarios for the fix

---

## 📚 Documentation (if user-facing or API)

- [ ] Update package or app `README.md` (if needed)
- [ ] Update `apps/docs` via Starlight (if needed)
- [ ] Add comments directly in the code (if needed)

---

## ✅ Acceptance Criteria

- [ ] Bug is reproducible and fixed
- [ ] Steps to reproduce are clear
- [ ] Impact and environment are documented
- [ ] No regressions in impacted apps/packages
- [ ] Tests cover the fix and main flows
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

- `@start`: Start bugfix flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

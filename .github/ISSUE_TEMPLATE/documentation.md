---
name: 'Documentation'
description: 'Request or improve documentation in the monorepo.'
about: 'Template for documentation issues, improvements, and technical writing.'
title: '[Docs] <Short Description>'
labels: ['documentation']
---

## 🛠️ Branch Name

Suggested pattern: `docs/<issue-number>-<short-description>`

Example: `docs/123-auth-flow`

---

## 📚 Documentation Description

Describe clearly and objectively:

- What needs to be documented or improved?
- What is the motivation or justification?
- What is out of scope (if anything)?

Example:

> Document the authentication flow in docs/monorepo/auth.md

---

## � Tasks

- [ ] Main documentation or update
- [ ] Validate technical accuracy
- [ ] Review for clarity and accessibility
- [ ] Validate in all affected packages/apps
- [ ] Code review

---

## 🛠️ Technical Details

| Item                       | Description                                   |
| -------------------------- | --------------------------------------------- |
| **Documentation location** | E.g.: `apps/docs`, `README.md`, specific file |
| **Target audience**        | E.g.: backend devs, frontend devs, new devs   |
| **Related features**       | E.g.: authentication, deployment, setup       |
| **Helper scripts**         | Build, deploy, doc generation, etc.           |
| **Environment**            | OS, browser, device, etc. (if relevant)       |

---

## ✅ Acceptance Criteria

- [ ] Documentation need is clearly described and justified
- [ ] Context and target audience are defined
- [ ] Documentation is technically accurate and accessible
- [ ] Merge without conflicts with `dev`

---

## 📝 Final Notes

- Possible doubts, risks, external dependencies, or blockers
- Suggestions for approach, extra validations, or future integrations
- Points to be reviewed in the PR (e.g., technical decisions, scope deviations, extra deliveries)

---

♻️ **AI Triggers (Copilot/ChatGPT)**
Use the commands below for specific automations:

- `@start`: Start documentation flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests (if needed)
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

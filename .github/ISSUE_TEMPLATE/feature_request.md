---
name: 'Feature Request'
description: 'Solicite uma nova feature para o monorepo.'
about: 'Template para solicitação de nova feature, cobrindo implementação, testes e documentação.'
title: '[Feature] <Nome da Feature>'


## 🚧 Branch Name

Suggested pattern: `feat/<issue-number>-<short-description>`

Example: `feat/123-social-login`

---

## 📌 Feature Description

Describe clearly and objectively:

- What will be implemented?
- What will NOT be delivered in this issue (out of scope or postponed)?
- What problem/motivation does this implementation address?
- What value does this feature add?

> **Important:** When creating the PR, reference this issue and detail in the PR everything that was implemented, not implemented, and any extras.

---

## 📋 Tasks

- [ ] Main implementation
- [ ] Unit and e2e tests
- [ ] Documentation update
- [ ] Validation with other packages/apps
- [ ] Code review

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Dependencies**           | E.g.: `zod`, `axios`                        |
| **Aliases/Paths**          | E.g.: `@/shared/*`, `@api/*`                |
| **Helper scripts**         | Build, seed, deploy scripts, etc.           |
| **Environment**            | Any new variable? `.env` configuration?     |

---

## 🧪 Test Strategy

- Frameworks used: `Jest`, `Vitest`, etc.
- Types: unit, integration, e2e
- Main test scenarios
- Expected mocks/stubs
- Minimum desired coverage (e.g., 80%)

---

## 📚 Documentation

- [ ] Package or app `README.md`
- [ ] `apps/docs` via Starlight
- [ ] Comments directly in the code

---

## ✅ Acceptance Criteria

- [ ] Expected behavior implemented
- [ ] No regressions in impacted apps/packages
- [ ] Tests cover main flows
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

- `@start`: Start feature flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

```

```

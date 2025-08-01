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

Describe the feature in detail:

- **What will be implemented?** (Describe the new functionality, UI, API, workflow, etc.)
- **What will NOT be delivered in this issue?** (Out of scope, postponed, or nice-to-have)
- **What problem or motivation does this address?** (Business value, user pain, compliance, etc.)
- **Who benefits from this feature?** (End user, dev, ops, external partner, etc.)
- **Is this MVP, nice-to-have, or breaking change?**
- **Are there external dependencies or integrations?** (APIs, third-party, other teams)
- **What are the main usage scenarios?** (Describe at least one real user flow)
- **What are the risks or rollout considerations?** (Migration, data, feature flag, phased rollout)

> **Important:** When creating the PR, reference this issue and detail in the PR everything that was implemented, not implemented, and any extras.

---

## 📋 Feature Checklist

- [ ] Main implementation
- [ ] UI/UX design (if applicable)
- [ ] API contract (if applicable)
- [ ] Unit and e2e tests
- [ ] Documentation update
- [ ] Validation with other packages/apps
- [ ] Rollout/feature flag (if needed)
- [ ] Code review

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Dependencies**           | E.g.: `zod`, `axios`, external APIs         |
| **Aliases/Paths**          | E.g.: `@/shared/*`, `@api/*`                |
| **Helper scripts**         | Build, seed, deploy, migration, etc.        |
| **Environment/config**     | Any new variable? `.env` configuration?     |
| **Rollout/flags**          | Feature flag, phased rollout, migration     |

---

## 🧪 Test Strategy

- What are the main test scenarios for this feature?
- What frameworks will be used? (`Jest`, `Vitest`, etc.)
- Types: unit, integration, e2e
- Expected mocks/stubs
- Minimum desired coverage (e.g., 80%)

---

## 📚 Documentation

- [ ] Update package or app `README.md`
- [ ] Update `apps/docs` via Starlight
- [ ] Add comments directly in the code
- [ ] Add usage example or guide (if user-facing)

---

## ✅ Acceptance Criteria

- [ ] Expected behavior implemented
- [ ] Main usage scenario(s) covered
- [ ] No regressions in impacted apps/packages
- [ ] Tests cover main flows
- [ ] Documentation is clear and accessible
- [ ] Rollout/flags (if needed) validated
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

- `@start`: Start feature flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

```

```

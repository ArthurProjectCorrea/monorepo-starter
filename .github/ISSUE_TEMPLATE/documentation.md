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

Describe the documentation need in detail:

- **What is missing or unclear?** (API, onboarding, usage, migration, troubleshooting, etc.)
- **Target audience:** (New devs, backend, frontend, QA, external users, etc.)
- **Format:** (Markdown, code comments, diagrams, guides, FAQ, etc.)
- **Motivation:** (Why is this documentation needed? Is it a recurring doubt? Is it for onboarding? Is it for compliance?)
- **Examples or references:** (Links to similar docs, code, or external references)
- **Known pain points:** (Where do people usually get stuck? What is most confusing?)
- **What is out of scope?** (Anything intentionally not included)

Example:

> Add a migration guide for v3 to v4 in docs/monorepo/migration.md. Target: all devs. Format: markdown with code samples. Motivation: recurring confusion in onboarding. Out of scope: legacy features.

---

## 📋 Documentation Checklist

- [ ] Documentation need is clearly described and justified
- [ ] Target audience and format defined
- [ ] Examples or references provided (if possible)
- [ ] Pain points or gaps identified
- [ ] Technical accuracy validated
- [ ] Clarity and accessibility reviewed
- [ ] Code review completed

---

## 🛠️ Technical Details

| Item                       | Description                                   |
| -------------------------- | --------------------------------------------- |
| **Documentation location** | E.g.: `apps/docs`, `README.md`, specific file |
| **Audience**               | E.g.: backend devs, frontend devs, new devs   |
| **Type**                   | API, onboarding, migration, troubleshooting   |
| **Format**                 | Markdown, code, diagram, video, etc.          |
| **Related features**       | E.g.: authentication, deployment, setup       |
| **Helper scripts**         | Build, deploy, doc generation, etc.           |
| **Pain points**            | Where do people get stuck?                    |
| **Environment**            | OS, browser, device, etc. (if relevant)       |

---

## ✅ Acceptance Criteria

- [ ] Documentation need is clearly described and justified
- [ ] Audience and format are defined
- [ ] Examples or references provided (if possible)
- [ ] Pain points or gaps addressed
- [ ] Documentation is technically accurate and accessible
- [ ] Merge without conflicts with `dev`

---

## 📝 Final Notes

- Doubts, risks, external dependencies, or blockers
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

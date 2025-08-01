---
name: 'Security Issue'
description: 'Report a security vulnerability or sensitive issue.'
about: 'Template for reporting vulnerabilities, security risks, and sensitive issues.'
title: '[Security] <Short Description>'
labels: ['security']
---

## 🛠️ Branch Name

Suggested pattern: `security/<issue-number>-<short-description>`

Example: `security/123-auth-bypass`

---

## 🚨 Vulnerability Description

Describe clearly and objectively:

- What is the vulnerability or security risk?
- What is the impact or risk level?
- How was it discovered?
- Is it reproducible? If so, how?
- Is it public or has it been exploited?

Example:

> Endpoint /api/user returns sensitive data without authentication.

---

## � Tasks

- [ ] Reproduce the vulnerability
- [ ] Identify root cause
- [ ] Implement fix or mitigation
- [ ] Add/Update tests (if needed)
- [ ] Update documentation (if needed)
- [ ] Validate in all affected packages/apps
- [ ] Code review

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Environment**            | Production, staging, local, etc.            |
| **Attack vector**          | E.g.: API endpoint, UI, dependency          |
| **Exploitability**         | How easy is it to exploit?                  |
| **Impact**                 | Data leak, privilege escalation, etc.       |

---

## 📝 Evidence

Include screenshots, logs, or proof of concept if possible.

> **Important:** Do not publicly disclose sensitive details. The maintainer will contact you for more information.

---

## 📚 Documentation

- [ ] Package or app `README.md` updated (if needed)
- [ ] `apps/docs` via Starlight (if needed)
- [ ] Comments directly in the code (if needed)

---

## ✅ Acceptance Criteria

- [ ] Vulnerability is clearly described and justified
- [ ] Context and environment are provided
- [ ] Evidence attached (if possible)
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

- `@start`: Start security flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

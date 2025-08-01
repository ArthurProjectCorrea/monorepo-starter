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

Describe the security issue in detail:

- **Type of vulnerability:** (e.g., XSS, CSRF, IDOR, privilege escalation, dependency, etc.)
- **How was it discovered?** (Manual test, audit, bug bounty, user report, etc.)
- **Steps to reproduce:** (Detailed steps, PoC, curl, screenshot, etc.)
- **Impact or risk level:** (Data leak, privilege escalation, DoS, etc. Is it critical, high, medium, low?)
- **Is it public or has it been exploited?** (CVE, exploit published, seen in the wild?)
- **Mitigation or workaround:** (Is there a temporary fix? Isolate, disable, restrict, etc.)
- **Is private contact needed?** (Sensitive details, responsible disclosure)
- **Related issues/PRs:** (Links to similar vulnerabilities, previous fixes)

Example:

> Type: IDOR. Discovered via bug bounty. Steps: 1. Login as user A, 2. Access /api/user/2, 3. Receives user B's data. Impact: data leak, high. Not public, not exploited. No workaround. Contact security@company.com for details.

---

## 📋 Security Checklist

- [ ] Vulnerability is clearly described and justified
- [ ] Steps to reproduce provided (if possible)
- [ ] Impact and risk level documented
- [ ] Evidence or PoC attached (if possible)
- [ ] Private contact provided (if needed)
- [ ] Root cause identified
- [ ] Fix or mitigation implemented
- [ ] Tests updated/added (if needed)
- [ ] Documentation updated (if needed)
- [ ] Code review completed

---

## 🛠️ Technical Details

| Item                       | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Affected apps/packages** | E.g.: `apps/api`, `apps/web`, `packages/ui` |
| **Environment**            | Production, staging, local, etc.            |
| **Attack vector**          | E.g.: API endpoint, UI, dependency          |
| **Exploitability**         | How easy is it to exploit?                  |
| **Impact**                 | Data leak, privilege escalation, DoS, etc.  |
| **CVE or reference**       | CVE-2025-XXXX, bug bounty link, etc.        |

---

## 📝 Evidence

Attach any relevant evidence:

- Screenshots, logs, or proof of concept (PoC)
- CVE, bug bounty, or external reference
- > **Important:** Do not publicly disclose sensitive details. The maintainer will contact you for more information.

---

## 📚 Documentation (if relevant)

- [ ] Update package or app `README.md` (if needed)
- [ ] Update `apps/docs` via Starlight (if needed)
- [ ] Add comments directly in the code (if needed)

---

## ✅ Acceptance Criteria

- [ ] Vulnerability is clearly described and justified
- [ ] Steps to reproduce and impact documented
- [ ] Evidence or PoC attached (if possible)
- [ ] Private contact provided (if needed)
- [ ] No regressions in impacted apps/packages
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

- `@start`: Start security flow
- `@branch`: Generate branch name
- `@test`: Plan and generate tests
- `@document`: Start documentation
- `@commit`: Generate semantic commit
- `@pullrequest`: Create and validate PR

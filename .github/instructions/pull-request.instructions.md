---
applyTo: '**'
---

# Pull Request Automation and Documentation Instruction

This file defines the mandatory workflow for Copilot Chat (or any AI agent) to automate, document, and submit Pull Requests (PRs) in this monorepo. Follow these steps exactly to ensure every PR is complete, traceable, and review-ready.

## Step-by-Step Workflow for AI Agents

1. **Identify Issue Type and PR Template**
   - After implementing and committing the branch referenced in the issue, determine the original issue type (`feature`, `bug`, `improvement`, `chore`, `documentation`, `security`).
   - Select the matching PR template from `.github/PULL_REQUEST_TEMPLATE/` (e.g., `feature.md`, `bug.md`, etc).

2. **Analyze Implementation vs. Issue Request**
   - Compare the original issue requirements with what was actually implemented in the branch:
     - List all items that were requested and delivered.
     - List all items that were requested but NOT delivered (with justification for each).
     - List all items that were NOT requested but were delivered (e.g., fixes, refactors, dependency updates, scripts, config changes, technical improvements, etc).
     - Identify any features implemented differently from the request but that achieve the intended result (explain the decision).
   - Document any workarounds, technical adjustments, installed dependencies, configuration changes, or unplanned improvements.

3. **Fill Out the PR Template**
   - Copy the relevant PR template (markdown content only, no YAML front matter).
   - Complete all template fields using the analysis above:
     - Summarize the PR objective.
     - Reference the original issue (e.g., `Closes #123`).
     - Detail what was implemented, what was not, and any extras.
     - Fill in checklists, acceptance criteria, tests performed, documentation, rollback plan, etc.
     - Add technical notes, implementation decisions, risks, questions, and reviewer guidance.

4. **Generate and Submit the PR**
   - Save the filled template as a markdown file in `.github/temp/` (e.g., `pr_feature_123.md`).
   - Use the GitHub CLI (`gh pr create`) to open a PR from the issue branch to the `dev` branch, using the filled markdown file as the PR body.
   - Set the PR title, labels, and reviewers according to the context and template.

5. **Best Practices for AI Agents**
   - Always use clear, technical English. Be objective and detail everything delivered in the branch, even if not explicitly requested in the issue.
   - Ensure the PR covers all relevant review points: code, tests, documentation, integrations, risks, rollback, etc.
   - Maintain traceability between issue and PR by referencing both in the appropriate fields.
   - Never omit extra deliveries, adjustments, or relevant technical decisions.

---

**Example Workflow:**

- Issue #123 requests feature X.
- Branch `feat/123-feature-x` implements X, but also updates dependencies and adjusts configs.
- The PR must list: all delivered items from X, any updated dependencies (not requested), any config adjustments (not requested), and justify any part of X not delivered.
- The PR template must be fully completed with these details and submitted for review.

---

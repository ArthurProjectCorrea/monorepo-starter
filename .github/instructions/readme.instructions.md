---
applyTo: '*/README.md'
---

# README Instruction Guide

## Purpose

This guide provides the standard for Copilot Chat (and any automation) to create, update, and maintain all `README.md` files in the project. The goal is to ensure every README is organized, accurate, and reflects the real context and structure of its folder and subfolders.

## Best Practices for Creating and Updating READMEs

1. **Context**: The README must clearly state the main purpose of the folder, its role in the project, and how it relates to other parts of the monorepo.
2. **Coverage**: Include information about all important subfolders and files, highlighting their connection to the overall context.
3. **Accuracy**: All information must be factual and reflect the current state of the project. Avoid placeholders or generic examples.
4. **Recommended Structure**:
   - Clear, descriptive title.
   - Purpose of the folder and its subfolders.
   - Usage instructions, installation steps, and real command examples.
   - Internal and external dependencies.
   - File structure and explanation of key directories/files.
   - References to additional documentation, if available.
   - Contact or maintainers, if relevant.
5. **Consistency**: Maintain a consistent style and information pattern across all READMEs in the monorepo.
6. **Continuous Updates**: Whenever there are relevant changes (new files, removals, purpose changes), the README must be reviewed and updated.

## Practical Examples

- The README in `apps/web/README.md` should explain that it is the Next.js frontend, list build/test/lint commands, dependencies, folder structure, and how to run locally.
- The README in `packages/ui/README.md` should detail the shared components, how to import and use them, dependencies, and contribution guidelines.

---

Copilot Chat must always follow these guidelines as the main reference for creating, updating, and reviewing all monorepo READMEs, ensuring clear, useful, and up-to-date documentation for every part of the project.

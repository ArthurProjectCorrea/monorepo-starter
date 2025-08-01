---
applyTo: '*/README.md'
---

# README Instruction Guide

## Purpose

This guide defines the mandatory standard for Copilot Chat (and any automation) to create, update, and maintain all `README.md` files in the project. The objective is to ensure every README is organized, technically accurate, and fully reflects the actual context and structure of its folder and subfolders. All instructions must be interpreted and executed precisely by Copilot agents and code maintainers.

**All README files must be written in clear, technical English.**

## Mandatory Practices for Creating and Updating READMEs

1. **Context**: Clearly state the main purpose of the folder, its role in the project, and its relationship to other parts of the monorepo.
2. **Coverage**: Document all important subfolders and files, explicitly highlighting their connection to the overall context.
3. **Accuracy**: All information must be factual and reflect the current state of the project. Placeholders, generic examples, or outdated content are strictly prohibited.
4. **Required Structure** (every README must include):
   - Clear, descriptive title.
   - Purpose of the folder and its subfolders.
   - Usage instructions, installation steps, and real, tested command examples.
   - Internal and external dependencies, with explanations of their roles.
   - File structure and explanation of key directories/files.
   - References to additional documentation, if available.
   - Contact or maintainers, if relevant.
5. **Consistency**: Maintain a consistent style, terminology, and information pattern across all READMEs in the monorepo.
6. **Continuous Updates**: Whenever there are relevant changes (new files, removals, changes in purpose or dependencies), the README must be promptly reviewed and updated to remain accurate.

## Practical Examples

- The README in `apps/web/README.md` must explain that it is the Next.js frontend, list build/test/lint commands, dependencies, folder structure, and provide instructions for running locally.
- The README in `packages/ui/README.md` must detail the shared components, how to import and use them, dependencies, and contribution guidelines.

---

Copilot Chat and all automation must always follow these guidelines as the primary reference for creating, updating, and reviewing all monorepo READMEs. This ensures clear, useful, and up-to-date technical documentation for every part of the project.

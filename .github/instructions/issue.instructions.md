---
applyTo: '.github/temp/**'
---

# Issue Automation and Requirements Analysis Instruction

This instruction defines the workflow for Copilot Chat (or any AI agent) to analyze requirements, map them to the correct projects, and generate pre-filled issue templates for each affected project in the monorepo.

## General Workflow

1. **Requirements Analysis**
   - When a requirements document or feature request is provided, analyze the content to determine which projects (e.g., `api`, `web`, `docs`, `ui`, etc.) are impacted.
   - For example, a user authentication system typically requires changes in both the backend (`api`) and frontend (`web`).

2. **Project Assignment**
   - For each requirement, break down the implementation into project-specific tasks.
   - Each project must have its own dedicated issue. Never create a single issue that spans multiple projects.

3. **Type Identification**
   - For each project-specific task, determine the type of implementation:
     - `feat` (feature): New functionality or significant enhancement.
     - `fix`: Bug or error correction.
     - `chore`: Technical tasks, maintenance, or refactoring.
     - `documentation`: Documentation improvements or additions.
     - `security`: Security-related issues or vulnerabilities.
   - Use the context of the requirement to select the correct type.

4. **Template Selection and Pre-filling**
   - Locate the appropriate issue template in `.github/ISSUE_TEMPLATE` based on the identified type.
   - Copy the template **starting only after the YAML front matter** (ou seja, tudo após o segundo bloco `---`).
   - Preencha todos os campos do markdown com as informações relevantes do requisito, bug ou contexto.
   - Nunca inclua o bloco YAML (`--- ... ---`) no corpo da issue enviada ao GitHub, pois isso quebra a renderização e a leitura.
   - Salve o template preenchido como um novo arquivo em `.github/temp/`, usando um nome claro e único (ex: `feature_request_api.md`, `bug_report_web.md`).
   - Exemplo de extração correta:
     - Template original:
       ```markdown
       ---
       name: 'Feature Request'
       ---

       ## 🛠️ Branch Name

       ...
       ```
     - Corpo a ser usado na issue:
       ```markdown
       ## 🛠️ Branch Name

       ...
       ```

5. **One Issue per Project**
   - Ensure that each project receives its own issue file.
   - Do not combine tasks for multiple projects into a single issue.
   - **Exception for UI and Web:** If changes in the `ui` package are part of a feature or fix for the `web` project (e.g., new or updated components used directly by `web`), document and track these changes within the same issue as `web`. Only create a separate issue for `ui` if the demand is exclusive to the shared package (such as a global refactor or a new generic component not tied to a specific app).

6. **Issue Submission to GitHub**
   - Após gerar e salvar todos os arquivos de issue em `.github/temp/`, envie cada issue para o GitHub usando o GitHub CLI (`gh issue create`) ou processo automatizado equivalente.
   - **Importante:** Sempre remova o YAML front matter (bloco entre `---` no topo do arquivo) antes de enviar. Use apenas o conteúdo markdown (a partir do primeiro título, como `## 🛠️ Branch Name`) como corpo da issue para garantir formatação correta no GitHub.
   - Certifique-se de definir corretamente o projeto, título e labels conforme o template e o contexto.

7. **Special Cases**
   - For `fix` (bug) issues: Instead of a requirements document, you will provide an error report or error message. The agent must analyze this report/message, extract as much context as possible (such as affected project, steps to reproduce, environment, etc.), and use the bug report template to create a dedicated issue for the relevant project in `.github/temp/`.
   - For `chore`, `documentation`, or `security`: Follow the same logic—analyze the context, assign to the correct project, select the template, and pre-fill accordingly.

8. **Centralized Documentation (docs project)**
   - The `docs` project is responsible for centralizing and maintaining technical documentation for the entire monorepo.
   - Whenever a relevant implementation (feature, breaking change, new component, new usage pattern, etc.) is made in any project, a `documentation` issue must be automatically created for the `docs` project to ensure the technical documentation is updated.
   - The documentation issue should always reference the original implementation issue or PR.
   - For fixes, chores, or refactors: only create a documentation issue if the change impacts usage, APIs, developer experience, or requires communication to other developers. Internal or non-impactful changes do not require documentation.
   - The `docs` project should never be used to document purely internal changes that do not affect usage, integration, or understanding for other developers.

## Example Flow

- **Input:** Requirement to implement user login authentication.
- **Analysis:**
  - Backend (`api`): Implement authentication endpoints, user management, token handling.
  - Frontend (`web`): Implement login UI, integrate with backend, handle authentication state.
- **Type:** `feat` for both.
- **Template:** Use the feature request template for each.
- **Output:**
  - `.github/temp/feature_request_api.md` (pre-filled for backend)
  - `.github/temp/feature_request_web.md` (pre-filled for frontend)

## Best Practices

- Always use technical English and provide clear, actionable information in the pre-filled templates.
- Ensure that all required fields in the template are completed with relevant details from the requirements or error report.
- Maintain traceability by referencing the original requirements document or error report in each generated issue file.
- Never duplicate the same issue across multiple projects; always split and adapt as needed.

---

This instruction ensures that requirements and error reports are systematically analyzed, mapped to the correct projects, and that actionable, project-specific issues are generated using the appropriate templates.

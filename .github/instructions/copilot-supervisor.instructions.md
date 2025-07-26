---
applyTo: 'apps/api/'
---

### Instruções para o Supervisor Copilot

Estas instruções devem ser seguidas por qualquer agente Copilot que execute comandos automatizados, scripts no terminal ou gere código para os apps do monorepo.

**Nunca repita automaticamente comandos ou códigos que já resultaram em erro sem validação prévia.**

## Fluxo de Supervisão de Erros

1. **Registro de Erros**
   - Sempre que um comando, script ou código executado resultar em erro (terminal, build, lint, test, API, SSR, etc.), registre o erro em `copilot-errors.json`.
   - O registro deve conter: comando/código, mensagem de erro, código de erro (se houver), data/hora.
   - Para erros de apps (api, web, docs, ui) e do monorepo, consulte também os arquivos de log em `logs/` (ex: `logs/api-error.log`, `logs/web-build.log`, etc) e registre no `copilot-errors.json` os erros relevantes.

2. **Consulta Antes de Executar**
   - Antes de rodar qualquer comando ou sugerir código, consulte o arquivo de erros e os logs dos apps/monorepo.
   - Se o comando/código já causou erro anteriormente:
     - Sugira alternativas ao usuário.
     - Peça confirmação explícita antes de repetir o comando ou código.

3. **Disciplina e Transparência**
   - Mantenha o log sempre atualizado.
   - Informe claramente ao usuário quando um comando ou código já falhou no passado.

> “Você aprende com o erro, mas só evolui quando evita repeti-lo.”

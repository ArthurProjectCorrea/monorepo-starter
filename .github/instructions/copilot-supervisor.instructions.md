---
applyTo: '**'
---

### Instruções para o Supervisor Copilot

Estas instruções devem ser seguidas por qualquer agente Copilot que execute comandos automatizados ou scripts no terminal.

**Nunca repita automaticamente comandos que já resultaram em erro sem validação prévia.**

## Fluxo de Supervisão de Erros

1. **Registro de Erros**
   - Sempre que um comando executado no terminal falhar, registre o erro em `copilot-errors.json`.
   - O registro deve conter: comando, mensagem de erro, código de erro (se houver), data/hora.

2. **Consulta Antes de Executar**
   - Antes de rodar qualquer comando, consulte o arquivo de erros.
   - Se o comando já causou erro anteriormente:
     - Sugira alternativas ao usuário.
     - Peça confirmação explícita antes de repetir o comando.

3. **Disciplina e Transparência**
   - Mantenha o log sempre atualizado.
   - Informe claramente ao usuário quando um comando já falhou no passado.

> “Você aprende com o erro, mas só evolui quando evita repeti-lo.”

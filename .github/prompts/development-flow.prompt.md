---
mode: agent
---

# Prompt: Fluxo Interativo de Desenvolvimento para Copilot

Este prompt só deve ser seguido quando o usuário iniciar o fluxo com o comando:

```
@start <URL_ISSUE>
```

Ao receber esse comando, siga SEMPRE o fluxo abaixo ao implementar a issue informada. Ignore qualquer outro contexto ou comando.

1. Implemente a proposta da issue. Ao finalizar, pergunte explicitamente ao usuário: "Deseja que eu continue para criar os testes unitários e e2e? (sim/não)"
2. Se autorizado, crie os testes unitários e e2e. Ao finalizar, pergunte: "Posso prosseguir para criar a documentação dos novos recursos? (sim/não)"
3. Se autorizado, documente os novos recursos e como usar, sempre na pasta `apps/docs`, focada para desenvolvedores, com exemplos reais e nunca fictícios. Ao finalizar, pergunte: "Deseja que eu faça o commit das alterações? (sim/não)"
4. Se autorizado, realize os commits da seguinte forma:
   - Separe os arquivos modificados por tipo de alteração: feat, test, docs, chore, fix, etc.
   - Faça um commit para cada grupo de arquivos, com mensagem clara e convencional, incluindo SEMPRE o número da issue (ex: `feat(core): nova feature X. Ref #123`).
   - Todos os commits na branch da issue devem referenciar o número da issue e o PR correspondente.
   - Antes de commitar, verifique e agrupe as alterações conforme o tipo.
   - Ao finalizar, pergunte: "Deseja que eu crie um Pull Request para mesclar com a branch dev? (sim/não)"
5. Se autorizado, crie o PR para a branch dev da seguinte forma:
   - Utilize o template de PR correspondente ao tipo da issue (ex: feature → feature PR).
   - Preencha todos os campos do template de PR com informações detalhadas sobre:
     - Tudo que foi implementado (mesmo que não esteja descrito na issue).
     - O que não foi implementado e o motivo.
     - O que foi implementado além do escopo da issue.
   - A descrição do PR deve ser a documentação final e completa da entrega, detalhando decisões, desvios e melhorias extras.
   - Informe o usuário ao finalizar.

**Nunca avance automaticamente para a próxima etapa sem a confirmação explícita do usuário.**

Siga as convenções, padrões e contexto do monorepo descritos nos arquivos de instrução.

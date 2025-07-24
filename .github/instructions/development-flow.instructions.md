---
applyTo: '**'
---

### Instruções para agentes Copilot

Estas instruções só devem ser seguidas quando o usuário iniciar o fluxo com o comando:

```
@start <URL_ISSUE>
```

Ao receber esse comando, siga o fluxo interativo descrito em `.github/prompts/development-flow.prompt.md`.
Nunca utilize este fluxo fora desse contexto.

**Nunca avance automaticamente para a próxima etapa sem a confirmação explícita do usuário.**

## Fluxo de Desenvolvimento

Siga este fluxo para implementar novas features, correções ou melhorias:

1. **Informar URL da issue**
   - Sempre inicie informando a URL da issue que será trabalhada.
2. **Identificar branch da issue e fazer checkout**
   - Localize a branch correspondente à issue (ou crie uma nova branch a partir de `dev` seguindo o padrão de nomenclatura).
   - Faça checkout para essa branch.
3. **Implementar proposta da issue**
   - Desenvolva a solução conforme descrito na issue.
4. **Criar testes unitários e e2e**
   - Implemente testes unitários e de integração/e2e para cobrir a nova funcionalidade ou correção.
5. **Validação e correções necessárias**
   - Execute os testes, valide a implementação e corrija eventuais problemas.
6. **Documentação dos novos recursos**
   - Toda documentação deve ser criada e atualizada exclusivamente na pasta `apps/docs`, focada para desenvolvedores.
   - Documente o sistema para que outros devs possam evoluir, criar novos recursos e entender o funcionamento.
   - Use exemplos reais e existentes no projeto, nunca conteúdo fictício ou desatualizado.
   - Atualize sumários, índices e navegação em `apps/docs` sempre que necessário.
   - Siga o padrão de nomenclatura e estrutura dos arquivos de documentação já existentes.
7. **Criar commit direcionado e referenciado**
   - Separe os arquivos modificados por tipo de alteração: feat, test, docs, chore, fix, etc.
   - Faça um commit para cada grupo de arquivos, com mensagem clara e convencional, incluindo SEMPRE o número da issue (ex: `feat(core): nova feature X. Ref #123`).
   - Todos os commits na branch da issue devem referenciar o número da issue e o PR correspondente.
   - Antes de commitar, verifique e agrupe as alterações conforme o tipo.
8. **Criar Pull Request para dev**
   - Abra um PR da branch da issue para a branch `dev`, referenciando a issue.
   - Utilize o template de PR correspondente ao tipo da issue (ex: feature → feature PR).
   - Preencha todos os campos do template de PR com informações detalhadas sobre:
     - Tudo que foi implementado (mesmo que não esteja descrito na issue).
     - O que não foi implementado e o motivo.
     - O que foi implementado além do escopo da issue.
   - A descrição do PR deve ser a documentação final e completa da entrega, detalhando decisões, desvios e melhorias extras.
9. **Validação de workflow**
   - Aguarde e verifique a execução dos workflows de CI (lint, test, build).
10. **Mesclar branch de issue com dev**
    - Após aprovação e sucesso nos workflows, faça o merge da branch da issue na branch `dev`.

> Siga sempre este fluxo para garantir rastreabilidade, qualidade e padronização no desenvolvimento do monorepo.

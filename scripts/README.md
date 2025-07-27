# scripts/

Central de automações, pós-clone, validações e setup do monorepo.

## O que é esta pasta?

A pasta `scripts/` reúne utilitários para facilitar o setup, manutenção e automação do repositório, incluindo pós-clone, sincronização de labels, validações e scripts interativos.

## Como usar

- Execute scripts sempre a partir da raiz do monorepo.
- Exemplos:
  - Pós-clone/configuração inicial:
    ```bash
    node scripts/post-init.js
    ```
  - Sincronizar labels do GitHub:
    ```bash
    node scripts/sync-labels.js
    ```
- Para automações de setup, utilize os scripts em `scripts/init/` na ordem sugerida.

## Estrutura

```
scripts/
  post-init.js         # Pós-clone/configuração inicial
  sync-labels.js        # Sincronização de labels do GitHub
  README.md             # Documentação dos scripts
  init/
    01-check-git-status.js   # Valida status do git
    02-install-deps.js       # Instala dependências
    03-vscode-extensions.js  # Sugere/extensões VSCode
    04-turbo-login.js        # Login no Turborepo
    05-env.js                # Configura variáveis de ambiente
    06-update-ui-name.js     # Atualiza nome do pacote UI
    07-update-ui-imports.js  # Ajusta imports do UI
    08-update-ui-deps.js     # Atualiza dependências do UI
    09-setup-gh-secrets.js   # Configura segredos do GitHub
    10-protect-branches.js   # Protege branches principais
```

## Documentação oficial

Para detalhes, exemplos reais e boas práticas, consulte a [documentação oficial dos scripts](../../apps/docs/src/content/docs/github/scripts.mdx).

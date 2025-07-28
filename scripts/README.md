# scripts/

> Scripts utilitários e automações para setup, manutenção e personalização do monorepo.

## Visão Geral

Esta pasta contém scripts essenciais para o fluxo de onboarding, automação e manutenção do monorepo. O principal destaque é o `post-init.js`, responsável por:

- Garantir a existência e checkout das branches `main` e `dev`.
- Automatizar a configuração de variáveis de ambiente e secrets.
- Personalizar nomes, imports e arquivos do monorepo conforme o novo repositório.
- Validar o setup (install, lint, build, test) e realizar commit/push automático.
- Vincular Turbo Remote Cache e instalar extensões recomendadas do VSCode.
- Disparar workflows essenciais do GitHub Actions para sincronização e manutenção.

## Scripts Disponíveis

- **post-init.js**: Script principal de pós-clonagem/configuração. Executa todo o fluxo de personalização e validação do monorepo.
  - Uso: `node scripts/post-init.js`
  - Argumentos opcionais:
    - `--skip-gh` (pula configuração de secrets GitHub)
    - `--skip-turbo` (pula login Turbo)
    - `--skip-vscode` (pula instalação de extensões VSCode)

## Como usar

1. Certifique-se de ter Node.js, pnpm, GitHub CLI (gh) e VSCode CLI instalados.
2. Após clonar o repositório, execute:

   ```sh
   node scripts/post-init.js
   ```

3. Siga as instruções interativas para informar tokens e dados do repositório.
4. O script fará todo o setup, commit/push e disparará os workflows iniciais.

## Estrutura

- `post-init.js`: Automação de setup e personalização do monorepo.
- (Outros scripts utilitários podem ser adicionados conforme necessidade.)

## Integração com o Monorepo

Os scripts desta pasta são fundamentais para garantir que o monorepo esteja sempre alinhado com as melhores práticas, atualizado e pronto para uso em novos repositórios derivados do template.

---

Para mais detalhes sobre o fluxo de automação, consulte a documentação em `apps/docs` e o README principal do projeto.

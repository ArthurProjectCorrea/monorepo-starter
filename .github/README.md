# .github

Este diretório contém configurações, políticas e automações para padronizar e facilitar a colaboração no repositório.

## Workflows disponíveis (`.github/workflows`)

- **ci.yml** — Lint, testes e typecheck automáticos em push/PR.
- **docs-build.yml** — Build e validação da documentação em PRs.
- **e2e.yml** — Testes end-to-end para apps web e api.
- **release-packages.yml** — Publicação automatizada de pacotes e changelogs na branch main.
- **update-internal-deps.yml** — Atualização semanal de dependências internas via cron ou manual.
- **sync-labels.yml** — Sincronização automática de labels do GitHub (usa scripts/sync-labels.js).
- **lint-mdx.yml** — Lint e formatação de arquivos Markdown/MDX em PRs.

Consulte a documentação oficial em [`apps/docs`](../../apps/docs) para detalhes, exemplos e boas práticas de automação.

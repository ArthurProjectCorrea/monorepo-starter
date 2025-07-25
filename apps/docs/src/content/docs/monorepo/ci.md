---
title: Fluxo de CI
---

# Fluxo de CI

O CI executa lint, testes, typecheck e build para todos os apps/pacotes via Turborepo e PNPM.

- Workflows principais: `.github/workflows/ci.yml`, `docs-build.yml`, `e2e.yml`
- Comandos: `pnpm lint`, `pnpm test`, `pnpm build`
- Veja exemplos de execução nos PRs e no README.

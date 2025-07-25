---
title: Fluxo de Release
---

# Fluxo de Release

O release é automatizado via Changesets e GitHub Actions:

- Versão e changelog: `pnpm exec changeset version`
- Publicação: `pnpm exec changeset publish`
- Workflow: `.github/workflows/release-packages.yml`
- Política: SemVer (https://semver.org/lang/pt-BR/)
- Releases agrupam mudanças por pacote e geram changelog automático.

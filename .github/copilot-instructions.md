# Copilot Instructions for AI Agents

## Arquitetura e Estrutura

- Monorepo gerenciado com **Turborepo** e **PNPM workspaces**.
- Diretórios principais:
  - `apps/` — aplicações finais:
    - `api/` — Backend modular (NestJS)
    - `web/` — Frontend SSR/SSG (Next.js)
    - `docs/` — Documentação técnica (Astro + Starlight)
  - `packages/` — código compartilhado:
    - `ui/` — Componentes React reutilizáveis
    - `config/` — Configurações compartilhadas (ESLint, Tailwind, TS)
    - `types/`, `utils/` — Tipagens e utilitários globais
- Configurações compartilhadas ficam em `packages/config` e são consumidas via `@repo/*-config`.
- Dependências internas entre pacotes usam `workspace:*`.

## Workflows e Comandos Essenciais

- Build, lint e test orquestrados via Turborepo e PNPM:
  - `pnpm build` — build global
  - `pnpm lint` — lint global
  - `pnpm test` — testes globais (Vitest frontend, Jest backend)
  - `pnpm <script> --filter=<package>` para comandos específicos
- CI: GitHub Actions automatiza lint, test, build e release
- Scripts de automação em `scripts/` (ex: pós-clone, validações, sync-labels)
- Proteção de branches e setup interativo via scripts em `scripts/init/`

## Convenções e Padrões Específicos

- TypeScript: sempre use `extends` relativo a partir de `packages/config/typescript`
- ESLint: utilize `@repo/eslint-config` nos projetos
- Tailwind/PostCSS: configs via `@repo/tailwind-config`
- Imports: use `@/` para caminhos relativos ao `src` em apps/pacotes
- Testes:
  - Frontend: Vitest + React Testing Library, arquivos `*.test.tsx`
  - Backend: Jest, arquivos `*.spec.ts`
- Documentação: `apps/docs` (Astro + Starlight), docs em Markdown/Mdx
- Evite caminhos absolutos, prefira imports relativos ou aliases

## Integrações e Pontos de Atenção

- Next.js: SSR/SSG, Tailwind, PostCSS, configs em `apps/web`
- NestJS: modular, configs em `apps/api`
- Astro: docs técnicas, configs em `apps/docs`
- Labels do GitHub sincronizadas via script `scripts/sync-labels.js`

## Exemplos Reais de Comandos

- Build do UI: `pnpm build:components --filter=@arthurcorreadev/monorepo-starter-ui`
- Testes do web: `pnpm test --filter=web`
- Lint global: `pnpm lint`
- Sincronizar labels: `node scripts/sync-labels.js`

## Referências e Exemplos

- Veja o `README.md` na raiz e nos apps para detalhes de cada stack
- Configurações detalhadas em `packages/config`
- Documentação de comandos e padrões em `apps/docs/src/content/docs/monorepo/`
- Histórico de mudanças em `CHANGELOG.md`

---

> Atualize este arquivo sempre que padrões, workflows ou integrações mudarem.

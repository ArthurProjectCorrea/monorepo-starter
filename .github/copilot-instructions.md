# Copilot Instructions for AI Agents

## Visão Geral da Arquitetura

- Monorepo gerenciado com **Turborepo** e **PNPM workspaces**.
- Estrutura principal:
  - `apps/` — aplicações finais:
    - `api` (NestJS, backend modular)
    - `web` (Next.js, SSR/SSG, frontend)
    - `docs` (Astro/Starlight, documentação técnica)
  - `packages/` — código compartilhado:
    - `ui` (componentes React)
    - `config` (ESLint, Tailwind, TS)
    - `types`, `utils`
- Configurações compartilhadas ficam em `packages/config` e são consumidas via `@repo/*-config`.
- Dependências internas entre pacotes usam `workspace:*`.

## Workflows Essenciais

- Build, lint e test orquestrados via Turborepo e PNPM:
  - `pnpm build` — build global
  - `pnpm lint` — lint global
  - `pnpm test` — testes globais (Vitest frontend, Jest backend)
  - Use `pnpm <script> --filter=<package>` para comandos específicos
- CI: GitHub Actions automatiza lint, test, build e release
- Scripts de automação em `scripts/` (ex: pós-clone, validações, sync-labels)
- Proteção de branches e setup interativo via scripts

## Convenções e Padrões

- TypeScript: configs em `packages/config/typescript`, sempre use `extends` relativo
- ESLint: use `@repo/eslint-config` nos projetos
- Tailwind/PostCSS: configs via `@repo/tailwind-config`
- Aliases: use `@/` para imports relativos ao `src` em apps/pacotes
- Testes:
  - Frontend: Vitest + React Testing Library, arquivos `*.test.tsx`
  - Backend: Jest, arquivos `*.spec.ts`
- Documentação: `apps/docs` (Astro + Starlight), docs em Markdown/Mdx
- Evite caminhos absolutos, prefira imports relativos ou aliases

## Integrações e Pontos de Atenção

- Next.js: SSR/SSG, Tailwind, PostCSS, configs em `apps/web`
- NestJS: modular, configs em `apps/api`
- Astro: docs técnicas, configs em `apps/docs`
- Labels do GitHub sincronizadas via script `scripts/sync-labels.js` (executar manualmente)
- Proteção de branches e setup automatizado via scripts em `scripts/init/`

## Exemplos de Comandos

- Build do UI: `pnpm build:components --filter=@arthurcorreadev/monorepo-starter-ui`
- Testes do web: `pnpm test --filter=web`
- Lint global: `pnpm lint`
- Sincronizar labels: `node scripts/sync-labels.js`

## Referências

- Veja o `README.md` na raiz e nos apps para detalhes de cada stack
- Configurações detalhadas em `packages/config`
- Documentação de comandos em `apps/docs/src/content/docs/monorepo/`
- Histórico de mudanças em `CHANGELOG.md`

---

> Atualize este arquivo sempre que padrões, workflows ou integrações mudarem.

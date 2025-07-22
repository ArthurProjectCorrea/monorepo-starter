# Copilot Instructions for AI Agents

## Arquitetura e Estrutura

- Monorepo gerenciado com **Turborepo** e **PNPM workspaces**.
- Diretórios principais:
  - `apps/` — aplicações finais: `api` (NestJS), `web` (Next.js), `docs` (Astro/Starlight).
  - `packages/` — código compartilhado: `ui` (componentes React), `config` (ESLint, Tailwind, TS), `types`, `utils`.
- Configurações compartilhadas ficam em `packages/config` e são consumidas via `@repo/*-config`.

## Workflows Essenciais

- **Build, lint e test** são orquestrados via Turborepo e scripts do PNPM:
  - `pnpm build` — build de todos os pacotes.
  - `pnpm lint` — lint em todos os pacotes.
  - `pnpm test` — testes globais (Vitest para frontend, Jest para backend).
  - Use `pnpm <script> --filter=<package> ` para rodar comandos em um pacote específico.
- **CI**: GitHub Actions automatiza lint, test, build e release.
- **Scripts de automação**: verifique a pasta `scripts/` para pós-clone e validações.

## Convenções e Padrões

- **TypeScript**: configs compartilhadas em `packages/config/typescript`, sempre use `extends` relativo.
- **ESLint**: use `@repo/eslint-config` nos projetos, importando o preset correto.
- **Tailwind/PostCSS**: configs compartilhadas via `@repo/tailwind-config`.
- **Aliases**: use `@/` para imports relativos ao `src` em apps e pacotes.
- **Testes**:
  - Frontend: Vitest + React Testing Library, arquivos `*.test.tsx`.
  - Backend: Jest, arquivos `*.spec.ts`.
- **Documentação**: `apps/docs` usa Astro + Starlight, docs em Markdown/Mdx.

## Integrações e Pontos de Atenção

- **Next.js**: SSR/SSG, Tailwind, PostCSS, configs em `apps/web`.
- **NestJS**: modular, configs em `apps/api`.
- **Astro**: docs técnicas, configs em `apps/docs`.
- **Dependências internas**: sempre use `workspace:*` nas dependências entre pacotes.
- **Evite caminhos absolutos**: sempre prefira imports relativos ou aliases.

## Exemplos de Comandos

- Build do UI: `pnpm build:components --filter=@repo/ui `
- Testes do web: `pnpm test --filter=web `
- Lint global: `pnpm lint`

## Referências

- Veja o `README.md` na raiz e nos apps para detalhes de cada stack.
- Configurações detalhadas em `packages/config`.

---

> Atualize este arquivo sempre que padrões, workflows ou integrações mudarem.

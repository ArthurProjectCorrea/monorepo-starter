# 🧱 Fullstack Template Profissional — Turborepo, Next.js, NestJS, Astro

<!-- DESCRIÇÃO DO PROJETO (será preenchida automaticamente pelo setup) -->
<div id="project-description">
<em>Descrição do projeto será inserida aqui automaticamente pelo script de setup.</em>
</div>

> Base sólida, escalável e pronta para qualquer projeto TypeScript moderno. Tudo já configurado: backend, frontend, documentação, automações e padrões profissionais.

---

## 🚀 Visão Geral

Este monorepo serve como ponto de partida robusto para projetos fullstack, reunindo as melhores ferramentas do ecossistema JS/TS em um único repositório organizado. Permite iniciar novos projetos com setup completo, automações e padrões de mercado — sem perder tempo com configurações repetitivas.

---

## ⚙️ Estrutura Técnica

```
apps/
  api/    → Backend (NestJS)
  web/    → Frontend (Next.js)
  docs/   → Documentação técnica (Astro + Starlight)
packages/
  config/ → Configs compartilhadas (eslint, prettier, tsconfig)
  ui/     → Componentes React reutilizáveis
  types/  → Tipagens globais
  utils/  → Funções utilitárias
```

---

## ✅ Recursos e Automação

- **Monorepo com Turborepo**: pipeline de build, dev, lint e test, cache inteligente, execução paralela.
- **Workspaces PNPM**: dependências otimizadas, aliases e scripts globais.
- **Frontend Next.js**: pronto para SSR, SSG, TailwindCSS, estrutura modular.
- **Backend NestJS**: modular, pronto para Swagger, validação, variáveis .env.
- **Documentação Astro**: tema Starlight, docs integradas ao repo.
- **Padronização de Código**: ESLint, Prettier, lint-staged, Husky.
- **Testes**: Jest (backend), Vitest + RTL (frontend).
- **CI com GitHub Actions**: lint, test, build, pronto para deploy e releases automáticos.
- **Scripts de automação**: pós-clone, setup, validações e proteção de branches.

---

## 🛠️ Comandos Principais

- `pnpm install` — instala todas as dependências
- `pnpm dev` — inicia todos os apps em modo desenvolvimento
- `pnpm build` — builda todos os apps/pacotes
- `pnpm lint` — roda o lint em todos os apps/pacotes
- `pnpm test` — executa todos os testes automatizados (unitários e integração)
- `pnpm test:e2e` — executa os testes end-to-end do backend (NestJS/api) a partir da raiz
- `pnpm dev --filter=<app>` — roda um app específico (ex: `web`, `api`, `docs`)

---

## 📋 Padrão de Commits

Todos os commits devem seguir o padrão [Conventional Commits](./apps/docs/src/content/docs/monorepo/commits.md). Veja exemplos e dicas na documentação.

---

## 🚦 Fluxo de Inicialização do Template

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repo>
   cd my-monorepo
   ```
2. **Execute o script de setup completo:**
   ```sh
   node scripts/post-init.js
   ```
   > Este script automatiza: instalação, login no GitHub, configuração de branches, validações e prepara o ambiente para uso imediato.
3. **Inicie o desenvolvimento:**
   ```sh
   pnpm dev
   ```

---

## 🧠 Para quem é este template?

- Projetos fullstack (SaaS, plataformas, MVPs, ERPs)
- Times que buscam padrão, organização e DX
- Devs que querem escalar rápido sem perder qualidade
- Aplicações com documentação viva desde o início

---

Consulte a documentação em `apps/docs` para detalhes de estrutura, contribuição e checklist de desenvolvimento.

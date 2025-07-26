---
applyTo: 'apps/docs/**'
---

# Guia Central de Boas Práticas e Estrutura — apps/docs (Starlight/Astro)

Este guia define as práticas, estrutura e padrões para manter a documentação técnica interna do monorepo, usando Astro + Starlight. Siga estas orientações para garantir clareza, consistência e integração entre todos os módulos do projeto.

---

## 1. Estrutura e Organização

- Toda documentação deve ser criada em `apps/docs/src/content/docs/`.
- Organize por escopo principal:
  - `monorepo/` — visão geral, arquitetura, integração entre apps/pacotes.
  - `api/` — documentação do backend (NestJS).
  - `web/` — documentação do frontend (Next.js).
  - `packages/` — pacotes compartilhados (ex: `ui/`, `config/`, `types/`, `utils/`).
  - `ui/` — componentes React reutilizáveis.
  - `github/` — automações, workflows e configurações do repositório.
- Cada escopo deve ter uma página central (ex: `api/index.mdx`) com tópicos claros, exemplos reais e links para subpáginas detalhadas.

---

## 2. Padrão de Conteúdo e Abordagem

- Cada página deve abordar:
  - **Visão geral**: função do módulo no monorepo.
  - **Como usar**: exemplos reais de uso e integração.
  - **Como estender**: instruções para adicionar recursos, hooks, middlewares, componentes, etc.
  - **Boas práticas**: dicas para manutenção, performance, acessibilidade e integração.
  - **Dependências**: o que depende deste módulo e do que ele depende.
  - **Exemplos reais**: sempre use exemplos do próprio projeto, nunca fictícios.
  - **Funcionalidades dependentes**: explique integrações entre apps/pacotes.
  - **Referências cruzadas**: links para docs de outros módulos relacionados.

---

## 3. Sintaxe, Componentes e Visual

- Sempre inicie arquivos `.mdx` com frontmatter:
  ```mdx
  ---
  title: Título da Página
  description: Descrição curta
  ---
  ```
- Importe componentes nativos do Starlight/Astro no início:

  ```mdx
  import {
    Icon,
    Card,
    LinkCard,
    CardGrid,
    Aside,
    Badge,
    Code,
    FileTree,
    LinkButton,
    Steps,
    Tabs,
    TabItem,
  } from '@astrojs/starlight/components';

  ;
  ```

- Use componentes nativos para enriquecer a interface: Cards, Asides, Badges, FileTree, Steps, Tabs, etc.
- Sempre defina o atributo `label` em ícones para acessibilidade.
- Use exemplos sintéticos e reais, evitando repetições e excesso de texto.
- Prefira caminhos relativos ou aliases (`@/`) para imports.

---

## 4. Sidebar e Navegação

- Sidebar é gerada pela estrutura de pastas/títulos, mas pode ser customizada via frontmatter ou `astro.config.mjs`.
- Garanta que toda nova página esteja representada na navegação.
- Use badges, ordem e agrupamentos para destacar novidades ou tópicos importantes.

---

## 5. Internacionalização (i18n)

- Estruture docs multilíngues em subpastas (`en/`, `pt-BR/`).
- Traduções de UI ficam em `src/content/i18n/`.
- Configure idiomas no bloco `starlight` do `astro.config.mjs`.

---

## 6. Customização e Overrides

- Para sobrescrever componentes nativos, use o campo `components` em `astro.config.mjs`.
- Só crie componentes próprios se os nativos não atenderem à necessidade.
- Adicione CSS customizado em `src/styles/` e use Tailwind conforme padrão do monorepo.

---

## 7. Busca e Plugins

- Busca full-text já habilitada via Pagefind.
- Para ocultar páginas/trechos da busca, use `pagefind: false` no frontmatter ou `data-pagefind-ignore`.
- Para Algolia DocSearch, adicione o plugin e configure conforme a documentação.
- Plugins extras podem ser adicionados no array `plugins` do `starlight()`.

---

## 8. Route Data e Dados Dinâmicos

- Para acessar dados da página/rota atual em componentes Astro:
  ```astro
  ---
  const { siteTitle, entry } = Astro.locals.starlightRoute;
  ---
  <h1>{siteTitle}</h1>
  <p>{entry.data.title}</p>
  ```
- Para lógica global, crie um middleware em `src/routeData.ts` e registre em `astro.config.mjs`.

---

## 9. Boas Práticas Gerais

- Sempre use frontmatter com `title` e `description`.
- Modularize: cada tema, componente ou recurso em seu próprio arquivo.
- Atualize sumários, índices e navegação ao criar/alterar docs.
- Documente exemplos reais, nunca fictícios.
- Mantenha a documentação enxuta, acessível e sustentável.
- Use componentes visuais para clareza e padronização.
- Explique como evoluir, integrar e manter cada módulo.

---

## 10. Exemplo de Estrutura Recomendada

```
src/content/docs/
  monorepo/
    index.mdx         # visão geral do monorepo
    arquitetura.mdx   # detalhes de arquitetura
  api/
    index.mdx         # docs do backend NestJS
    rotas.mdx         # exemplos de rotas reais
  web/
    index.mdx         # docs do frontend Next.js
    pages.mdx         # exemplos de páginas reais
  packages/
    config/
      index.mdx       # docs de configs compartilhadas
    ui/
      index.mdx       # docs dos componentes React
  github/
    index.mdx         # docs de automações e workflows
```

---

> Siga este guia para garantir que a documentação interna do monorepo seja clara, conectada, profissional e fácil de evoluir para todos os desenvolvedores.

---
applyTo: 'apps/docs/**'
---

# Instrução Rápida: Referência de Configuração e Componentes Starlight/Astro

Este guia mostra como usar recursos avançados do Starlight/Astro: frontmatter, ícones, overrides, plugins e dados de rota.

---

## 1. Frontmatter

- Sempre inicie arquivos `.mdx` com frontmatter:
  ```mdx
  ---
  title: Título da Página
  description: Descrição curta
  sidebar:
    label: 'Custom Sidebar'
    order: 1
    badge:
      text: 'Novo'
      variant: 'tip'
  draft: false
  slug: /meu-caminho/
  hero: true
  banner: true
  ---
  ```
- Campos comuns: `title`, `description`, `sidebar`, `draft`, `slug`, `hero`, `banner`.
- Use frontmatter para personalizar navegação, ordem, badges e status da página.

---

## 2. Ícones (Icon)

- Use o componente `<Icon />` para inserir ícones nativos:
  ```mdx
  <Icon name="star" label="Estrela" size="2rem" color="goldenrod" />
  ```
- Props principais:
  - `name`: nome do ícone (ex: `"star"`, `"rocket"`)
  - `label`: acessibilidade (sempre defina)
  - `size`, `color`, `class`: personalização visual

---

## 3. Overrides (Sobrescrever Componentes)

- Para sobrescrever componentes nativos, adicione no `astro.config.mjs`:
  ```js
  starlight({
    components: {
      SocialIcons: './src/components/EmailLink.astro',
      Footer: './src/components/FooterCustom.astro',
    },
  });
  ```
- Para sobrescrever apenas em uma página, importe e use localmente:

  ```mdx
  import DefaultFooter from '@astrojs/starlight/components/Footer.astro';
  <DefaultFooter /

  >
  ```

- Prefira sobrescrever componentes de menor escopo e só quando necessário.

---

## 4. Plugins

- Adicione plugins no array `plugins` do `starlight()`:
  ```js
  import starlightDocSearch from '@astrojs/starlight-docsearch';
  starlight({
    plugins: [
      starlightDocSearch({
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
      }),
    ],
  });
  ```
- Plugins permitem adicionar funcionalidades como busca Algolia, analytics, etc.

---

## 5. Route Data (Dados de Rota)

- Para acessar dados da rota/página atual em componentes Astro:
  ```astro
  ---
  const { siteTitle, entry } = Astro.locals.starlightRoute;
  ---
  <h1>{siteTitle}</h1>
  <p>{entry.data.title}</p>
  ```
- Para lógica global, crie um middleware:
  ```ts
  // src/routeData.ts
  import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
  export const onRequest = defineRouteMiddleware((context) => {
    // Exemplo: modificar título dinamicamente
    context.locals.starlightRoute.entry.data.title += '!';
  });
  ```
  E registre no `astro.config.mjs`:
  ```js
  starlight({ routeMiddleware: './src/routeData.ts' });
  ```

---

> Use esta instrução para aplicar recursos avançados do Starlight/Astro de forma padronizada e sem erros de sintaxe.

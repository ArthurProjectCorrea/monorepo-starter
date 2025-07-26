---
applyTo: 'apps/docs/**'
---

# Tutorial Rápido: Documentação Starlight/Astro — Sintaxe e Padrão

Este guia ensina como criar e manter documentação em `.mdx` no padrão Astro + Starlight, evitando erros comuns e garantindo consistência visual.

## 1. Estrutura Recomendada

```
src/
  content/
    docs/      # arquivos .md/.mdx (cada um vira uma página)
    i18n/      # JSONs de tradução (opcional)
  components/  # componentes Astro/React próprios
  styles/      # CSS customizado
  assets/      # imagens, logos
  content.config.ts
public/
astro.config.mjs
```

## 2. Criação de Páginas

- Crie arquivos `.mdx` em `src/content/docs/`.
- Sempre inicie com frontmatter:
  ```mdx
  ---
  title: Título da Página
  description: Descrição curta
  ---
  ```
- Use títulos com âncoras quando necessário:

  ```mdx
  import AnchorHeading from '@astrojs/starlight/components/AnchorHeading.astro';
  <AnchorHeading level="2" id="exemplo">Exemplo</AnchorHeading

  >
  ```

## 3. Internacionalização

- Estruture docs por idioma: `src/content/docs/en/`, `src/content/docs/pt-BR/`.
- Traduções de UI: JSONs em `src/content/i18n/`.
- Configure idiomas em `astro.config.mjs` no bloco `starlight`.

## 4. Componentes e Overrides

- Importe componentes nativos no início do arquivo:

  ```mdx
  import {
    Card,
    Aside,
    Badge,
    Code,
    FileTree,
    Steps,
    Tabs,
    TabItem,
  } from '@astrojs/starlight/components';

  ;
  ```

- Para sobrescrever componentes, use o campo `components` em `astro.config.mjs`.
- Prefira componentes nativos. Só crie componentes próprios se necessário.

## 5. Sidebar

- Sidebar padrão segue estrutura de pastas/títulos.
- Para customizar, use o campo `sidebar` em `astro.config.mjs` ou no frontmatter:
  ```mdx
  ---
  title: Minha Página
  sidebar:
    label: 'Custom Sidebar'
    order: 2
    badge:
      text: 'Novo'
      variant: 'tip'
  ---
  ```

## 6. Busca

- Busca já habilitada via Pagefind.
- Para ocultar uma página:
  ```mdx
  ---
  title: Oculta
  pagefind: false
  ---
  ```
- Para ocultar trecho:
  ```mdx
  <div data-pagefind-ignore>Não indexar.</div>
  ```
- Para usar Algolia DocSearch:
  1. Instale `@astrojs/starlight-docsearch`.
  2. Configure o plugin no `astro.config.mjs`:
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
  3. Para traduzir a UI do DocSearch, adicione traduções no JSON em `src/content/i18n/` ou estenda o schema i18n em `content.config.ts` se necessário.

## 7. Dados de Rota (Route Data)

- Para acessar dados da página atual em um componente:
  ```astro
  ---
  const { siteTitle, entry } = Astro.locals.starlightRoute;
  ---
  <h1>{siteTitle}</h1>
  <p>{entry.data.title}</p>
  ```
- Para lógica global, use middleware em `src/routeData.ts` e adicione em `astro.config.mjs`.

## 8. Customização de CSS/Tailwind

- Adicione CSS customizado em `src/styles/` e importe nos arquivos necessários.
- Para Tailwind, configure em `packages/config` e importe no projeto.
- Use classes utilitárias do Tailwind normalmente nos componentes e conteúdo `.mdx`.

---

## 9. Dicas Rápidas

- Sempre use frontmatter com `title`.
- Não repita imports ou componentes.
- Use componentes nativos para Cards, Asides, Badges, etc.
- Prefira exemplos reais e sintéticos.
- Use `label` em ícones para acessibilidade.
- Evite caminhos absolutos, prefira relativos ou aliases.

---

> Use este tutorial como referência para criar documentação clara, padronizada e sem erros de sintaxe no Starlight/Astro.

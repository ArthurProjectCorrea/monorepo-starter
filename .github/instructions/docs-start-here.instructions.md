---
applyTo: 'apps/docs/**'
---

# Guia Inicial: Astro + Starlight

Este tutorial ensina como iniciar e configurar documentação com Astro + Starlight, seja em um projeto novo ou existente, com foco em clareza, sintaxe correta e sustentabilidade.

## 1. Novo Projeto

- Execute no terminal:
  ```sh
  npm create astro@latest -- --template starlight
  ```
- Entre na pasta criada e rode:
  ```sh
  npm run dev
  ```
- Crie arquivos `.md` ou `.mdx` em `src/content/docs/` para adicionar páginas.

## 2. Adicionando Starlight a um Projeto Existente

- No terminal:
  ```sh
  npx astro add starlight
  ```
- No `astro.config.mjs`, adicione:
  ```js
  import starlight from '@astrojs/starlight';
  // ...
  integrations: [starlight({ title: 'Minha documentação' })],
  ```
- Em `src/content.config.ts`:
  ```js
  import { defineCollection } from 'astro:content';
  import { docsLoader } from '@astrojs/starlight/loaders';
  import { docsSchema } from '@astrojs/starlight/schema';
  export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  };
  ```
- Crie a pasta `src/content/docs/` e adicione arquivos.

## 3. Organização e Customização

- Organize a navegação editando a sidebar.
- Personalize o visual e opções no arquivo de configuração.
- Use componentes nativos para enriquecer as páginas.

## 4. Boas Práticas Ambientais

- Prefira imagens otimizadas e recursos leves.
- Use cache para assets (`/_astro/`).
- Prefira hospedagem verde.
- Minimize scripts e carregue vídeos sob demanda.
- Mantenha o foco em simplicidade e eficiência.

## 5. Dicas Rápidas

- Atualize o Starlight regularmente:
  ```sh
  npx @astrojs/upgrade
  ```
- Sempre confira a sintaxe e o frontmatter das páginas.
- Consulte a documentação oficial e a comunidade em caso de dúvidas.

---

> Siga este guia para criar e manter documentação eficiente, sustentável e padronizada com Astro + Starlight.

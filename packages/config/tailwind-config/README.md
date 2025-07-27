# @repo/tailwind-config

> Configuração centralizada do Tailwind CSS e PostCSS para o monorepo.

## Propósito

Este pacote fornece presets, temas, plugins e configurações globais do Tailwind CSS e PostCSS para todos os apps e pacotes do monorepo, garantindo padronização visual e facilidade de manutenção.

## Estrutura

- `tailwind.preset.js`: Preset global do Tailwind (theme, plugins, etc).
- `postcss.config.js`: Configuração compartilhada do PostCSS.
- `shared-styles.css`: Estilos globais opcionais.

## Como usar

1. Instale as dependências necessárias no app/pacote:

   ```sh
   pnpm add -D tailwindcss postcss autoprefixer @repo/tailwind-config
   ```

2. Crie ou edite o arquivo `tailwind.config.js` no app/pacote:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     presets: [require('@repo/tailwind-config/tailwind.preset')],
     // Outras configurações locais podem ser adicionadas aqui
   };
   ```

3. Para PostCSS, importe a configuração compartilhada se necessário:

   ```js
   import { postcssConfig } from '@repo/tailwind-config/postcss';
   export default postcssConfig;
   ```

4. Rode os scripts normalmente:
   - `pnpm build:styles`
   - `pnpm dev:styles`

## Dependências

- `tailwindcss` e `postcss` como devDependencies (apenas neste pacote, apps/pacotes podem precisar para CLI local).
- Plugins recomendados: `@tailwindcss/forms`, `@tailwindcss/typography`.

## Estrutura de arquivos

```
packages/config/tailwind-config/
├── postcss.config.js
├── shared-styles.css
├── tailwind.preset.js
└── README.md
```

## Manutenção

Atualize este pacote sempre que houver mudanças globais de design, tokens, plugins ou padrões de uso do Tailwind no monorepo.

---

Responsável: @ArthurProjectCorrea

# @repo/typescript-config

> Configurações TypeScript centralizadas e compartilhadas para todo o monorepo.

## Visão Geral

Este pacote fornece presets de configuração TypeScript para todos os apps e pacotes do monorepo, garantindo padronização, manutenção centralizada e DX consistente.

### Arquivos disponíveis

- `base.json`: configuração base para projetos Node, NestJS, Astro, etc.
- `nextjs.json`: preset para projetos Next.js (frontend SSR/SSG).
- `react-library.json`: preset para bibliotecas React.

## Como usar

No seu `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/base.json"
}
```

Ou para Next.js:

```json
{
  "extends": "@repo/typescript-config/nextjs.json"
}
```

Ou para bibliotecas React:

```json
{
  "extends": "@repo/typescript-config/react-library.json"
}
```

## Benefícios

- Centralização de regras e paths globais
- Atualização única para todo o monorepo
- Redução de duplicidade e divergência
- Pronto para uso com Turborepo e PNPM Workspaces

## Manutenção

Sempre que precisar alterar regras globais, edite apenas este pacote. Os apps/pacotes herdarão automaticamente as mudanças.

Consulte a documentação geral do monorepo para exemplos e detalhes avançados.

# @repo/eslint-config

> Configuração compartilhada de ESLint para os projetos do monorepo.

## Propósito

Este pacote centraliza as regras e extensões de ESLint utilizadas em todos os apps e pacotes do monorepo, garantindo padronização e facilidade de manutenção.

## Estrutura

- `base.js`: regras base para projetos TypeScript/JavaScript.
- `next.js`: regras específicas para projetos Next.js.
- `react-internal.js`: ajustes para projetos React internos.
- `package.json`: metadados do pacote.

## Como usar

No seu projeto (app ou pacote), adicione no arquivo de configuração do ESLint:

```js
// eslint.config.js ou .eslintrc.js
module.exports = {
  extends: [require.resolve('@repo/eslint-config/base')],
  // ou para Next.js:
  // extends: [require.resolve('@repo/eslint-config/next')],
};
```

No monorepo, as dependências internas são resolvidas via `workspace:*`.

### Exemplo real

No `apps/web/eslint.config.js`:

```js
module.exports = {
  extends: [require.resolve('@repo/eslint-config/next')],
};
```

## Instalação

No contexto do monorepo, a instalação é feita automaticamente pelo `pnpm install`.

## Manutenção

Para atualizar regras, edite os arquivos `.js` deste pacote. As mudanças impactarão todos os projetos que consomem esta configuração.

## Referências

- [Documentação oficial do ESLint](https://eslint.org/docs/latest/)
- Veja exemplos de uso em `apps/web` e `apps/api`.

---

Responsável: @arthurcorreadev

# apps/docs — Documentação Técnica Centralizada

Este projeto reúne toda a documentação técnica do monorepo, construída com [Astro](https://astro.build/) e [Starlight](https://starlight.astro.build/).

## Status

Em constante atualização — reflete sempre o estado real do monorepo.

## Estrutura

Organize a documentação por assunto e tópicos em `src/content/docs/`.
Use exemplos reais do projeto e mantenha os sumários/índices atualizados.

## Como rodar localmente

```bash
pnpm dev --filter=docs
```

Acesse em [http://localhost:4321](http://localhost:4321)

## Como gerar build de produção

```bash
pnpm build --filter=docs
```

Saída em `apps/docs/dist`.

---

**Consulte este projeto sempre que precisar de informações técnicas, exemplos reais e guias de uso do monorepo.**

---

## 🛠️ Comandos Úteis

| Comando                      | Ação                      |
| ---------------------------- | ------------------------- |
| `pnpm dev --filter=docs`     | Dev server local          |
| `pnpm build --filter=docs`   | Build de produção         |
| `pnpm preview --filter=docs` | Preview do build          |
| `pnpm astro ...`             | Comandos diretos do Astro |

---

## � Recomendações

- Use Markdown/Mdx para toda documentação.
- Prefira links relativos e imagens em `src/assets`.
- Consulte exemplos e padrões em `src/content/docs/monorepo/`.
- Atualize sempre que fluxos ou padrões mudarem no monorepo.

---

> Dúvidas? Consulte o README principal do monorepo ou abra uma issue.

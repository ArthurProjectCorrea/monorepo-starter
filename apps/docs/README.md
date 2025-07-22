# 📚 Documentação Técnica — Astro + Starlight

Este diretório contém a documentação técnica do monorepo, construída com [Astro](https://astro.build/) e o tema [Starlight](https://starlight.astro.build/).

---

## 📂 Estrutura

```
apps/docs/
  public/           → Assets estáticos (favicons, imagens)
  src/
    assets/         → Imagens para uso em docs
    content/        → Documentação em Markdown/Mdx
      docs/         → Seções principais (overview, checklist, guias, etc)
      monorepo/     → Padrões, automações, comandos do monorepo
      reference/    → Referências técnicas
    content.config.ts
  astro.config.mjs  → Configuração Astro
  package.json      → Dependências e scripts
  tsconfig.json     → Configuração TypeScript
```

---

## 🚦 Fluxo de Uso

1. **Editar ou criar docs:**
   - Adicione arquivos `.md` ou `.mdx` em `src/content/docs/`.
   - Use subpastas para organizar por tema (ex: `monorepo/`, `guides/`, `reference/`).
2. **Rodar localmente:**
   ```sh
   pnpm dev --filter=docs
   ```
   Acesse em [http://localhost:4321](http://localhost:4321)
3. **Build de produção:**
   ```sh
   pnpm build --filter=docs
   ```
   Saída em `apps/docs/dist`.

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
